const { Router } = require('express');

const router = Router();

const {storeMapa, getMapa} = require('../controller/mapaController');

router.post('/store/mapa', storeMapa);
router.get('/get/mapa/', getMapa);

module.exports = router;
    