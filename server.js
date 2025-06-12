const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

// Debug: mostrar estructura completa
console.log('Contenido de /app/dist:');
try {
  const distFiles = fs.readdirSync(path.join(__dirname, 'dist'));
  console.log(distFiles);
  
  // Mostrar contenido de la subcarpeta
  const subDir = path.join(__dirname, 'dist', 'prueba-tailwind-angular');
  console.log('Contenido de prueba-tailwind-angular:');
  console.log(fs.readdirSync(subDir));
  
  // Mostrar contenido de browser
  const browserDir = path.join(subDir, 'browser');
  console.log('Contenido de browser:');
  console.log(fs.readdirSync(browserDir));
  
} catch (err) {
  console.log('Error leyendo directorios:', err.message);
}

// La ruta correcta es dist/prueba-tailwind-angular/browser/
app.use(express.static(path.join(__dirname, 'dist/prueba-tailwind-angular/browser')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/prueba-tailwind-angular/browser/index.html'));
});

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});