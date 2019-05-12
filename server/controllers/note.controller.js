notesCtrl = {}
const Note = require('../models/Note.model')

// Listar todas las notas
notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find()
    res.json(notes)
}

// Crear una nota
notesCtrl.createNote = async (req, res) => {
    const { title, description } = req.body

    const newNote = new Note({ title, description });
    await newNote.save();
    res.json({
        message: 'La nota fué creada'
    })
}

// Editar nota
notesCtrl.editNote = async (req, res) => {
    const { id } = req.params
    const content = { 
        title: req.body.title, 
        description: req.body.description,
    }
    await Note.findByIdAndUpdate(id, {$set: content}, {new: true});

res.json({
    message: 'Nota actualizada'
})
}

// Eliminar nota
notesCtrl.deleteNote = async (req, res) => {
    const { id } = req.params;
    await Note.findByIdAndDelete(id)
    res.json({
        message: 'Nota eliminada'
    })
}

module.exports = notesCtrl