const { expect } = require('chai');
const wrap = require('./wrap');

let string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend a arcu eget commodo. Mauris tincidunt lacus et odio pulvinar, et tincidunt dui molestie. Sed.';

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });

  it('Returns empty string if column width is < 0', () => {
    expect(wrap(string, -1)).to.equal('');
    expect(wrap(string, 0)).to.equal('');
  });

  it('Make sure every word is accounted for', () => {

  });

  it('Line length never exceeds given column width', () => {
    // let result = wrap(string, 15);
  });
});
