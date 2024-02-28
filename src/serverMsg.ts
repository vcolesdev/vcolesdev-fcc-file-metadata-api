const appPort = process.env.PORT || 3000;

export default {
  listener: () => {
    console.log(`Your app is listening on port ${appPort}`);
  },
  error: (err: Error) => {
    console.error('Error starting server:', err);
  }
}