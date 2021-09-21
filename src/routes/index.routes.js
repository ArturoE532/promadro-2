const { Router } = require('express');
const router = Router();

const {renderIndex, renderAbout, renderDatos, renderInfoMadronos } = require('../controllers/index.controllers')

router.get('/', renderIndex);

router.get('/about', renderAbout);

router.get('/datos', renderDatos);

router.get('/datos/info/:id', renderInfoMadronos);

module.exports = router;