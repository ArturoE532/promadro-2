const { Router } = require('express');
const router = Router();

const { 
    renderMadronoForm,
    renderMadronoFormt1,
    renderMadronoFormt2,
    createMadronoFormt1,
    createMadronoFormt2,
    renderMadronos,
    renderEditMadronos,
    updateMadronos,
    deleteMadronos 
} = require('../controllers/madronos.controllers');

const {isAuthenticated} = require('../helpers/auth');

// Nueva nota
router.get('/madronos/tipo', isAuthenticated, renderMadronoForm);

router.get('/madrono/addt1', isAuthenticated, renderMadronoFormt1);

router.get('/madrono/addt2', isAuthenticated, renderMadronoFormt2);

router.post('/madronos/newmadronot1', isAuthenticated, createMadronoFormt1);

router.post('/madronos/newmadronot2', isAuthenticated, createMadronoFormt2);

//Obteber todas las notas
router.get('/madronos', isAuthenticated, renderMadronos);

// Editar notas
router.get('/madronos/edit/:id', isAuthenticated, renderEditMadronos);

router.put('/madronos/edit/:id', isAuthenticated, updateMadronos);

// eliminar notas
router.delete('/madronos/delete/:id', isAuthenticated, deleteMadronos);

module.exports = router;