const express = require('express');
const apiPort = 3037;
const api = express();

api.use(express.json());

api.listen(apiPort, (err) => {
    if (err) {
        console.error("error starting api server: ", err);
        return;
    }
    console.log(`Api server is listening at ${port}...`);
});

