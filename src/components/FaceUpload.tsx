import React, { useEffect, useRef, useState } from 'react';
import * as faceapi from 'face-api.js';

type FaceData = {
  descriptor: Float32Array;
  photos: string[];
};

const FaceUpload = () => {
  const [gallery, setGallery] = useState<FaceData[]>([]);
  const [matchedPhotos, setMatchedPhotos] = useState<string[]>([]);
  const [scanning, setScanning] = useState(false);
  const [cameraActive, setCameraActive] = useState(false); // New state to track camera status
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = '/models'; // Ensure your models are in the public/models directory
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);
      await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
      console.log('Face-API models loaded.');
    };
    loadModels();
  }, []);

  const startCamera = async () => {
    setMatchedPhotos([]);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = () => {
          videoRef.current?.play();
          setCameraActive(true); // Set camera to active once playing
        };
      }
    } catch (err) {
      console.error('Error accessing camera:', err);
      alert('Could not access camera. Please ensure camera permissions are granted.');
      setCameraActive(false); // Ensure cameraActive is false on error
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setCameraActive(false); // Set camera to inactive
    }
  };

  const capturePhoto = async () => {
    if (!videoRef.current || !canvasRef.current || !cameraActive) return; // Only capture if camera is active

    setScanning(true); // Indicate scanning process has started

    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      setScanning(false);
      return;
    }
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const dataUrl = canvas.toDataURL('image/jpeg');

    const img = new Image();
    img.src = dataUrl;
    await img.decode(); // Ensure image is loaded before processing

    await scanFace(img, dataUrl); // Await the scanFace operation
    setScanning(false); // Set scanning to false after scanFace completes
  };

  const scanFace = async (img: HTMLImageElement, dataUrl: string) => {
    const detection = await faceapi
      .detectSingleFace(img, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceDescriptor();

    if (!detection) {
      alert('No face detected! Please ensure your face is clearly visible.');
      return; // Exit without updating gallery if no face
    }

    const newDescriptor = detection.descriptor;
    const threshold = 0.6; // You can adjust this threshold for stricter/looser matching
    let matchedIndex = -1;

    for (let i = 0; i < gallery.length; i++) {
      const dist = faceapi.euclideanDistance(newDescriptor, gallery[i].descriptor);
      if (dist < threshold) {
        matchedIndex = i;
        break;
      }
    }

    if (matchedIndex >= 0) {
      // Face matched with an existing person
      const updatedGallery = [...gallery];
      // Only add photo if it's not already in the array for this descriptor to avoid duplicates
      if (!updatedGallery[matchedIndex].photos.includes(dataUrl)) {
        updatedGallery[matchedIndex].photos.push(dataUrl);
      }
      setGallery(updatedGallery);
      setMatchedPhotos(updatedGallery[matchedIndex].photos);
      alert('Face matched!');
    } else {
      // New face detected
      const newEntry = { descriptor: newDescriptor, photos: [dataUrl] };
      setGallery([...gallery, newEntry]);
      setMatchedPhotos([dataUrl]);
      alert('New face added to gallery!');
    }
  };

  return (
    <div className="p-4 flex flex-col items-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Face Recognition & Gallery</h1>

      <div className="flex space-x-4 mb-6">
        {!cameraActive ? (
          <button
            onClick={startCamera}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-150 ease-in-out"
          >
            Open Camera
          </button>
        ) : (
          <button
            onClick={stopCamera}
            className="px-6 py-3 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transition duration-150 ease-in-out"
          >
            Close Camera
          </button>
        )}
      </div>

      <div className="relative w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden mb-6">
        <video
          ref={videoRef}
          className="w-full h-auto object-cover rounded-lg"
          autoPlay
          muted // Mute video to prevent echo from webcam
          playsInline // Recommended for mobile browsers
        />
        {cameraActive && (
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full opacity-0 pointer-events-none" // Hidden canvas, fully transparent
          />
        )}
      </div>

      {cameraActive && (
        <button
          onClick={capturePhoto}
          className="mt-4 px-8 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 transition duration-150 ease-in-out text-lg font-semibold"
          disabled={scanning}
        >
          {scanning ? 'Scanning Face...' : 'Capture & Scan Face'}
        </button>
      )}

      {matchedPhotos.length > 0 && (
        <div className="mt-8 w-full max-w-2xl">
          <h3 className="text-2xl font-bold mb-4 text-gray-700 text-center">Matched Photos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 bg-white rounded-lg shadow-xl">
            {matchedPhotos.map((photo, i) => (
              <div key={i} className="relative aspect-w-1 aspect-h-1 group overflow-hidden rounded-lg shadow-md">
                <img
                  src={photo}
                  alt={`matched-face-${i}`}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm font-medium">Match {i + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {gallery.length > 0 && (
        <div className="mt-8 w-full max-w-2xl">
          <h3 className="text-2xl font-bold mb-4 text-gray-700 text-center">Full Gallery of Known Faces ({gallery.length} unique faces)</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 bg-white rounded-lg shadow-xl">
            {gallery.map((faceData, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-3 bg-gray-50 shadow-sm">
                <h4 className="font-semibold text-lg mb-2 text-gray-800">Face Group {index + 1}</h4>
                <div className="grid grid-cols-2 gap-2">
                  {faceData.photos.map((photo, photoIndex) => (
                    <img
                      key={photoIndex}
                      src={photo}
                      alt={`gallery-face-${index}-${photoIndex}`}
                      className="w-full h-auto object-cover rounded-md shadow-sm"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FaceUpload;