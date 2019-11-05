const Product = require(`../Models/Product.model`);

exports.test = function(req, res, next)
{
    res.send(`You hit the test route.`);
}

exports.create = function(req, res, next) 
{
    const product = new Product(
        {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
        }
    );
    product.save((err, result) => {
        if (err) 
        {
            return next(err);
        }
        console.log(`Create result: `, result);
        res.send(`Product created successfully.`);
    });
}
exports.getProducts = function(req, res, next)
{
    const query = {};
    Product.find(query, (err, results) => {
        if (err)
        {
            return next (err);
        }
        console.log(`get products results: `, results);
        res.send(results);
    });
}

exports.updateProduct = function(req, res, next) 
{
    const query = {
        _id: req.params.id
    };
    const update = {
        $set: req.body
    };
    Product.findByIdAndUpdate(query, update, (err, result) => {
        if (err) 
        {
            return next(err);
        }
        res.send(result);
    });
}

exports.deleteProduct = function(req, res, next)
{
    const query = {
        _id: req.params.id
    };
    Product.findByIdAndDelete(query, (err, result) => {
        if (err) {
            return next(err);
        }
    })
}