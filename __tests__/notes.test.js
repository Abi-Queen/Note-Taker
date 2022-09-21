const fs = require('fs');
const { findById, createNewNote, validateNote } = require('../lib/notes.js');
const { notes } = require('../data/notes.json');

jest.mock('fs');

test('creates a note object', () => {
  const note = createNewNote({ title: 'Mop', id: '12' }, notes);

  expect(note.title).toBe('Mop');
  expect(note.id).toBe('12');
});

test('finds by id', () => {
  const startingNotes = [
    {
      id: '0',
      title: 'Resume',
      text: 'Update employment section',
    },
    {
      id: '1',
      title: 'Catch up on coding assignments',
      text: 'Module 11',
    }
  ]

  const result = findById('1', startingNotes);

  expect(result.title).toBe('Catch up on coding assignments');
});

test('validates text', () => {
  const note = {
    id: '0',
    title: 'Resume',
    text: 'Update employment section',
  };

  const invalidNote = {
    id: '0',
    name: 'Resume',
  };

  const result = validateNote(note);
  const result2 = validateNote(invalidNote);

  expect(result).toBe(true);
  expect(result2).toBe(false);
});
