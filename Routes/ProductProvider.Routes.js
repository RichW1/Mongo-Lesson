const express = require(`express`);
const router = express.Router();
const productProviderController = require(`../Controllers/ProductProvider.Controller`);

router.get(`/`, productProviderController.getProviders);

router.post(`/`, productProviderController.createProvider);

module.exports = router;