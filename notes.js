const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'your notes'
}

// Read note
const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if(note) {
        console.log(chalk.blue(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse("Not find note!"))
    }
    
}

// Add Note
const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green('New note addedd!'))
    } else {
        console.log(chalk.red('Note title taken!'))
    }
}

// Remove Note
const removeNote = (title) => {
    const notes = loadNotes()

    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notesToKeep.length !== notes.length) {
        saveNotes(notesToKeep);
        console.log(chalk.green("Note removed!"))
    } else {
        console.log(chalk.red("No note found!"))
    }
}

// List notes
const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your Notes'))
    notes.forEach((note) => {
        console.log('Title: ' + note.title)
    })
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return  []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}