import express from 'express';
const app = express();

const handleListening = () => {
  console.log('✅ Listening on: http://localhost:5000');
};


app.get('/', (req, res) => {
  res.send('Hello world!');
});


app.listen(5000, handleListening);
