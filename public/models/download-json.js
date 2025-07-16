import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const MODEL_URL_BASE = 'https://raw.githubusercontent.com/justadudewhohacks/face-api.js/master/weights/';

const files = [
  'tiny_face_detector_model-weights_manifest.json',
  'tiny_face_detector_model-shard1',
  'face_landmark_68_model-weights_manifest.json',
  'face_landmark_68_model-shard1',
  'face_recognition_model-weights_manifest.json',
  'face_recognition_model-shard1'
];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Assuming you want to save in 'public/models' relative to this script file:
const dir = path.resolve(__dirname, '..', 'models');

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
  console.log(`Created directory: ${dir}`);
}

function downloadFile(fileName) {
  return new Promise((resolve, reject) => {
    const url = MODEL_URL_BASE + fileName;
    const filePath = path.join(dir, fileName);
    const file = fs.createWriteStream(filePath);

    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${res.statusCode})`));
        return;
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => {
          console.log(`Downloaded: ${fileName}`);
          resolve();
        });
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => reject(err));
    });
  });
}

async function downloadAll() {
  for (const file of files) {
    try {
      await downloadFile(file);
    } catch (error) {
      console.error(`Error downloading ${file}:`, error.message);
    }
  }
  console.log('All downloads complete!');
}

downloadAll();
