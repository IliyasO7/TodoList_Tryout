const path = require('path');

const express = require('express');

const TodoController = require('../controllers/todo');
const userController = require('../controllers/users');

const userAuthentication = require('../middleware/auth');
const Todo = require('../models/todo');


const router = express.Router();


router.post('/signup', userController.signup)

router.post('/login',userController.login)
//router.get('/user/signup',userController.signedUsers);
/*
router.get('/user/getUser',authenticateMiddleware.authentication,userController.getUsers);

//router.get('/user/getUser',authenticateMiddleware.authentication,userController.getUsers);

router.post('/user/addUser',authenticateMiddleware.authentication,userController.postAddUser);

router.delete('/user/deleteUser/:userId',authenticateMiddleware.authentication,userController.deleteUser);
*/




router.post('/getExpenses/:pageNo',userAuthentication.authentication ,TodoController.getTodo);

router.post('/addExpense',userAuthentication.authentication,TodoController.addTodo);

router.delete('/deleteExpense/:userId',userAuthentication.authentication,TodoController.deleteTodo);



module.exports = router;









