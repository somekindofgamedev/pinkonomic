import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const licenseFilePath = path.join(__dirname, '../LICENSE');
const currentYear = new Date().getFullYear();
const fullName = 'Pinkonomic Community';

fs.readFile(licenseFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading LICENSE file:', err);
        return;
    }

    const updatedLicense = data
        .replace('[year]', currentYear)
        .replace('[fullname]', fullName);

    fs.writeFile(licenseFilePath, updatedLicense, 'utf8', (err) => {
        if (err) {
            console.error('Error writing LICENSE file:', err);
            return;
        }

        console.log('LICENSE file updated successfully.');
    });
});
