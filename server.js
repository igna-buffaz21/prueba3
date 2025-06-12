const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Servir archivos estáticos desde dist/
app.use(express.static(path.join(__dirname, 'dist/tu-nombre-proyecto')));

// Redirigir todas las rutas al index.html (para SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/tu-nombre-proyecto/index.html'));
});

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});