const ProductProvider = require(`../Models/ProductProvider.model`);

exports.getProviders = function(req, res, next) 
{
    const query = {};
    ProductProvider.find(query, (err, results) => {
        if (err)
        {
            return next (err);
        }
        console.log(`get product provider results: `, results);
        res.send(results);
    });
};

exports.createProvider = function(req, res, next) 
{
    const query = {};
    const Provider = new ProductProvider(
        {
            name: req.body.name,
            description: req.body.description,
            address: req.body.address,
            state: req.body.state,
            zip: req.body.zip,
            phone: req.body.phone
        });
        provider.save((err, result) => {
            if (err) 
            {
                return next(err);
            }
            console.log(`Provider Create result: `, result);
            res.send(`Provider created successfully.`);
        });
};