const { Router } = require('express');

const router = Router();

const {storePendencia, getPendencia} = require('../controller/pendenciasController');

router.post('/store/pendencia', storePendencia);
router.get('/get/pendencia/:cpf', getPendencia);

module.exports = router;
