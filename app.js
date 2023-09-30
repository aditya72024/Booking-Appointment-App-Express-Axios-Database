const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();


const cors = require('cors');
app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));



const sequelize = require('./util/database');

app.set('view engine','ejs');
app.set('views','views');

//for request parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//for using assests statially
app.use(express.static(path.join(__dirname, 'public')));

const userRoutes = require('./routes/user');
app.use(userRoutes);
// const shopController = require('./controllers/shop');
// app.delete('/delete-user/:userId', shopController.deleteUser);

const errorController = require('./controllers/error');
app.use(errorController.get404);

sequelize.sync().then(result => {

    app.listen(5000);

}).catch(err => {
    console.log(err)
})



