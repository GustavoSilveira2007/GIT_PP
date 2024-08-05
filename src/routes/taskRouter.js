const { Router } = require('express');
const router = Router();

const { storeTask } = require('../controller/taskController');
const { storeLogin } = require('../controller/loginController');

router.post('/store/task', storeTask);
router.post('/store/login', storeLogin);

module.exports = router;




