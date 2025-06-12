const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

// Debug: mostrar qué archivos hay en dist/
console.log('Contenido de /app/dist:');
try {
  const distFiles = fs.readdirSync(path.join(__dirname, 'dist'));
  console.log(distFiles);
  
  // Si hay una subcarpeta, mostrar su contenido también
  if (distFiles.length > 0) {
    const subDir = path.join(__dirname, 'dist', distFiles[0]);
    if (fs.statSync(subDir).isDirectory()) {
      console.log(`Contenido de ${subDir}:`);
      console.log(fs.readdirSync(subDir));
    }
  }
} catch (err) {
  console.log('Error leyendo dist:', err.message);
}

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});