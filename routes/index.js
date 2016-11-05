var express = require('express');
var router = express.Router();
var ctrlUsers = require('../controllers/user');
var ctrlIndex = require('../controllers/index');

/* GET home page. */
router.get('/', ctrlIndex.userList);

/* API */
router.get('/api/users', ctrlUsers.findAll);
router.get('/api/users/:id', ctrlUsers.findById);
router.put('/api/users/', ctrlUsers.add);
router.post('/api/users/:id', ctrlUsers.update);
router.delete('/api/users/:id',ctrlUsers.deleteById);

module.exports = router;
