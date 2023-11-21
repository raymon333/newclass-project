const app = require('./app'); // Importing the Express app from a file named 'app'
const PORT = process.env.PORT || 3000; // Setting the port number, defaulting to 3000 if not provided

app.listen(PORT, () => {
    console.log(`SERVER is running at port: ${PORT}`);
});
