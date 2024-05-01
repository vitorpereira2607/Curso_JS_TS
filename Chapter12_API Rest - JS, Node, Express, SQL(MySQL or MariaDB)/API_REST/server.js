import app from './app';

const port = 3002;

app.listen(port, () => {
  console.log('Access port: http://localhost:3002');
  console.log('Server running on port: ', port);
})
