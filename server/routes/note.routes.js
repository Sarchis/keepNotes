const express = require('express');
const router = express.Router();
const noteCtrl = require('../controllers/note.controller');


router.get('/', noteCtrl.getNotes); // Todas las notas
router.post('/add', noteCtrl.createNote); // Crear notas
router.put('/edit/:id', notesCtrl.editNote); // Editar notas
router.delete('/remove/:id', notesCtrl.deleteNote); // Eliminar Nota

module.exports = router;