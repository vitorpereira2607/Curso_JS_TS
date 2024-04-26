import app from './app';

const port = 3001;

app.listen(port, () => {
  console.log('Access port: http://localhost:3001');
  console.log('Server running on port: ', port);
})
