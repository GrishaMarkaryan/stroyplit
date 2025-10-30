const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Путь к папке с изображениями
const baseFolder = path.join(__dirname, 'app/_images');

// Рекурсивная функция для обхода папок
function convertFolder(folder) {
  fs.readdirSync(folder, { withFileTypes: true }).forEach(entry => {
    const entryPath = path.join(folder, entry.name);

    if (entry.isDirectory()) {
      // Рекурсивно обходим подкаталоги
      convertFolder(entryPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
        // Создаём папки для WebP и AVIF в текущей директории
        const webpFolder = path.join(folder, 'webp');
        const avifFolder = path.join(folder, 'avif');

        if (!fs.existsSync(webpFolder)) fs.mkdirSync(webpFolder);
        if (!fs.existsSync(avifFolder)) fs.mkdirSync(avifFolder);

        // WebP
        sharp(entryPath)
          .webp({ quality: 80 })
          .toFile(path.join(webpFolder, entry.name.replace(ext, '.webp')))
          .then(() => console.log(`WebP: ${entry.name}`))
          .catch(err => console.error(err));

        // AVIF
        sharp(entryPath)
          .avif({ quality: 60 })
          .toFile(path.join(avifFolder, entry.name.replace(ext, '.avif')))
          .then(() => console.log(`AVIF: ${entry.name}`))
          .catch(err => console.error(err));
      }
    }
  });
}

// Запуск
convertFolder(baseFolder);
console.log('Конвертация изображений запущена...');