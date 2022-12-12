const validator = require('validator')
const yargs = require('yargs')
const chalk = require('chalk')
const notes = require('./notes.js')

//add command   
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Corpo do texto',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) { 
        notes.addNote(argv.title, argv.body)
    }

})

//remove command
yargs.command({
    command: 'remove',
    describe: 'Remove note!',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) { 
        notes.removeNote(argv.title)
    }
})

//list command
yargs.command({
    command: 'list',
    describe: 'Lista de notas',
    handler(argv) {
        notes.listNotes()
    }
})

// read command
yargs.command({
    command: 'read',
    describe: 'Lendo a nota',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()
//console.log(yargs.argv)