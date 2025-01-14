const express = require('express');
const path = require('path');

const rootDir = require('../util/path');
const { title } = require('process');

const router = express.Router();
const adminData = require('./admin');

const products = [];

router.get('/add-product',(req, res, next) => {
      // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
      res.render('add-product', {docTitle: 'Add Product', 
            path: '/admin/add-product',
            activeAddProduct: true,
            productCSS: true,
            formCSS: true
      });
});

router.post('/add-product', (req, res, next) => {
      // console.log(req.body);
      products.push({title: req.body.title});
      res.redirect('/');
});

exports.router = router;
exports.products = products;