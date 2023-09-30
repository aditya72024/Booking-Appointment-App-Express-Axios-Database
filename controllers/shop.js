const User = require('../models/user');


exports.getIndex = (req,res,next) => {

    User.findAll().then(users => {
        res.json(users);
        // res.render('user/index', {
        //     users: users,
        //     pageTitle: "Booking App",
        //     path: '/index'
        // });
    })

}


exports.addUser = (req,res,next) => {

    
    const name = req.body.data.name; 
    const email = req.body.data.email; 
    const phone = req.body.data.phone; 

    User.create({
     name : name,
         phone : phone,
          email : email
    }).then( result => {
         res.json(result);
    //  res.redirect('/');
    }).catch(err => {
          console.log(err);
     })
}

exports.deleteUser = (req,res,next) => {
    const userId = req.params.userId;

    
    User.findByPk(userId).then(user => {
         return user.destroy();
    }).then(result => {
         res.json(result);
    }).catch(err => console.log(err));
}