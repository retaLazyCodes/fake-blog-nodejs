const app = require('./app');
const port = process.env.PORT ? process.env.PORT : 8081


app.listen(port, () => {
    console.log("Running server at port: " + port);
});
