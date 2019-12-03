// Everything we require should go here
const express = require('express');
const mongoose = require(`mongoose`);
const products = require(`./Routes/Product.Routes`);
const providers = require(`./routes/ProductProvider.Routes`);

// Set our global constant stuff here
const apiPort = 3444;
const dbName = `db1`;
const dbPort = 27017;
const dbUrl = `mongodb://localhost:${dbPort}/${dbName}`;

// Create our app and clients and whatnots...
const api = express();

// Tell our apps and clients and whatnot to use stuff... (middleware)
api.use(express.json());
api.use(`/products`, products);
api.use(`/product-providers`, providers);

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on(`error`, console.error.bind(console, "Mongo Connection Error: "));

// My route goes here
api.get('/secret', (req, res, next) => {
    res.set({
        "Content-Type": "text/html"
    });
    res.send(`<h1>SHHHHHHHH, it's a secret! AWESOME!</h1>`);
});

// Tell my server to listen for requests
api.listen(apiPort, (err) => {
    if (err) {
        console.error(`error starting api server: `, err);
        return;
    }
    console.log(`Api server is listening at ${apiPort}...`);
});

