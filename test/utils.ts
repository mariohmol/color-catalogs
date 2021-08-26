import { COLORS, colorDistance,
  findByColor,
  findColorByName, HEXtoRGB } from '../index';
import { expect } from 'chai';

describe('Color Utils Test', () => {

  // it('findByColor', () => {
  //   const keys = Object.keys(COLORS.Australia)
  //   expect(keys.length).to.be.equal(206)

  //   const color = findByColor('Australia', '#cc00cc')
  //   expect(color).to.eql({ name: 'P41 -  Erica Pink', value: '#c55a83' });
  // });

  // it('findColorByName', () => {
  //   const keys = Object.keys(COLORS.British4800)
  //   expect(keys.length).to.be.equal(122)

  //   const color = findColorByName('British4800', '#cc00cc')
  //   expect(color).to.eql({ name: '24 E 53 - Purple', value: '#90538f' });
  // });

  // it('colorDistance', () => {
  //   const keys = Object.keys(COLORS.BritishStandard)
  //   expect(keys.length).to.be.equal(119)

  //   const color = colorDistance('BritishStandard', '#cc00cc')
  //   expect(color).to.eql({ name: '381 542 - Ruby', value: '#982d57' });
  // });


  // it('HEXtoRGB', () => {
  //   const keys = Object.keys(COLORS.Crayola72)
  //   expect(keys.length).to.be.equal(72)

  //   const color = HEXtoRGB('#cc00cc')
  //   expect(color).to.eql({ name: 'Hot Pink', value: '#C22AA3' });
  // });

});