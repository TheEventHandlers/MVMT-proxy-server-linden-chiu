const express = require('express');
const morgan = require('morgan');
const proxy = require('http-proxy-middleware');

const app = express();

app.use(morgan('tiny'));
app.use('/watches/:wid', express.static('public'));

app.use('/api/watches/:wid/reviews', proxy({ target: 'http://localhost:3004', changeOrigin: true }));

app.listen(3004, () => {
  console.log('listening on port 3000...');
});
