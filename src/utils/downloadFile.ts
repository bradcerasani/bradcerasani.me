import fs from 'fs';
import https from 'https';
import { join } from 'path';

export function downloadFile(url: string, filename: string, destinationDir: string): Promise<void> {
  return new Promise((resolve, reject) => {
    // Ensure the destination directory exists
    fs.mkdirSync(destinationDir, { recursive: true });

    const filePath = join(destinationDir, filename);
    const fileStream = fs.createWriteStream(filePath);

    https
      .get(url, (response) => {
        // Check if the request was successful
        if (response.statusCode !== 200) {
          reject(new Error(`Failed to download file: Status code ${response.statusCode}`));
          return;
        }

        response.pipe(fileStream);

        fileStream.on('finish', () => {
          fileStream.close();
          resolve();
        });
      })
      .on('error', (err) => {
        fs.unlinkSync(filePath); // If an error occurs, remove the partially downloaded file
        reject(err);
      });
  });
}
