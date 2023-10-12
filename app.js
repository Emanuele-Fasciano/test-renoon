const express = require('express');
const app = express();
const port = 3000;

// Configuro Express per servire file statici dalla directory 'public'
app.use(express.static('public'));

// Avvio il server
app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});
