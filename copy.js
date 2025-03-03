const fs = require('fs');
const path = require('path');

// Calea către directorul curent și către subfolderul de test
const sourceDir = __dirname; // Directorul curent
const targetDir = path.join(__dirname, 'test'); // Directorul de test

// Verifică dacă folderul de test există deja, dacă nu, îl creează
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir);
}

// Citește fișierele din directorul curent
fs.readdir(sourceDir, (err, files) => {
    if (err) {
        console.error('Nu am putut citi fișierele din directorul sursă:', err);
        return;
    }

    files.forEach(file => {
        const filePath = path.join(sourceDir, file);
        const targetFilePath = path.join(targetDir, file);

        // Ignoră subfolderul "test"
        if (file !== 'test') {
            // Dacă este fișier, îl copiază în folderul de test
            fs.copyFile(filePath, targetFilePath, (err) => {
                if (err) {
                    console.error(`Eroare la copierea fișierului ${file}:`, err);
                } else {
                    console.log(`Fișierul ${file} a fost copiat cu succes în folderul test.`);
                }
            });
        }
    });
});
