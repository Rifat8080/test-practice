const strings = require('./index.js');

test('length of word is 4', () => {
  expect(strings.stringLength('word')).toBe(4);
});

test('length of word is 10', () => {
  expect(strings.stringLength('wordwordwo')).toBe(10);
});

test('length of word is 11', () => {
  expect(() => {
    strings.stringLength('wordwordwor');
  }).toThrow();
});

test('length of word is 0', () => {
  expect(() => {
    strings.stringLength('');
  }).toThrow();
});

test('Reverse word', () => {
  expect(strings.reverseString('word')).toBe('drow');
});

test('Capitalize string', () => {
  expect(strings.capitalizeString('word')).toBe('Word');
});
