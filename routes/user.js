const express = require('express');
const shopController = require('../controllers/shop');
const router = express.Router();



router.get('/', shopController.getIndex);
router.post('/add-user', shopController.addUser);
router.delete('/delete-user/:userId', shopController.deleteUser);


module.exports = router;