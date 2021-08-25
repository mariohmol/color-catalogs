import { COLORS, findByColor } from '../index';
import { expect } from 'chai';

describe('Faker test', () => {

  it('X11', () => {
    const keys = Object.keys(COLORS.X11)
    expect(keys.length).to.be.equal(145)
    console.log(keys.length)

    const color = findByColor('X11', '#cc00cc')
    expect(color).to.eql({ name: 'Dark Violet', value: '#9400D3' });
  });

  it('Flexa', () => {
    const keys = Object.keys(COLORS.Flexa)
    expect(keys.length).to.be.equal(771)
    
    const color = findByColor('Flexa', '#cc00cc')
    expect(color).to.eql({ name: 'Puur Framboos', value: '#ad588f' });
  });

  it('RAL', () => {
    const keys = Object.keys(COLORS.RAL)
    expect(keys.length).to.be.equal(215)

    const color = findByColor('RAL', '#cc00cc')
    expect(color).to.eql({ name: 'RAL 4010 - Telemagenta', value: '#C63678' });
  });

  it('Wikipedia', () => {    
    const keys = Object.keys(COLORS.Wikipedia)
    expect(keys.length).to.be.equal(554)

    const color = findByColor('Wikipedia', '#cc00cc')
    expect(color).to.eql({ name: 'Electric purple', value: '#BF00FF' });
  });

});