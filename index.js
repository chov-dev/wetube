import express from 'express';
const app = express();

const handleListening = () => console.log('✅ Listening on: http://localhost:5000');
const handleHome = (req, res) => res.send('Hello from home');

app.get('/', handleHome);

app.listen(5000, handleListening);
