const express = require('express');
const exphb = require('express-handlebars');
const session = require('express-session');
const path = require('path');
const app = express();
const PORT = process.env.PORT;
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
    secret: 'secret', 
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore ({db:sequelize})
};
app.use(session(sess));
const hbs = exphb.create({
    helpers: {
    format_date: date => {
        return`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear}`
    }}
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(require('./controllers/'));
app.listen(PORT, () => {
    console.log('http://localhost:' + PORT)
    sequelize.sync({force: false})
});