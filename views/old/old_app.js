const express = require('express');
const bodyParser = require('body-parser');
// const expressHbs = require('express-handlebars')
// const { create } = require('express-handlebars');

const app = express();

// const hbs = create({
//       extname: '.hbs',
//       defaultLayout: 'main-layout',
// });

// app.engine('hbs', hbs.engine);
app.set('view engine', 'ejs');
// app.set('view engine', 'hbs');
// app.set('view engine', 'pug');
app.set('views', 'views');

const adminData = require('../../routes/admin');
const shopRoutes = require('../../routes/shop');
const path = require('path');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.router);
app.use(shopRoutes);

app.use((req, res, next) => {
      // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
      res.status(404).render('404', {docTitle: 'Page Not Found'});
});

app.listen(3000);