const { Router } = require('express');

const router = Router();

const {storeProgra, getProgra} = require('../controller/prograController');

router.post('/store/progra', storeProgra);
router.get('/get/programacao/:cpf', getProgra);

module.exports = router;
