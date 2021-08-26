import { COLORS, findByColor } from '../index';
import { expect } from 'chai';

describe('Color Catalogs Test', () => {

  it('Australia', () => {
    const keys = Object.keys(COLORS.Australia)
    expect(keys.length).to.be.equal(206)

    const color = findByColor('Australia', '#cc00cc')
    expect(color).to.eql({ name: 'P41 -  Erica Pink', value: '#c55a83' });
  });


  it('British4800', () => {
    const keys = Object.keys(COLORS.British4800)
    expect(keys.length).to.be.equal(122)

    const color = findByColor('British4800', '#cc00cc')
    expect(color).to.eql({ name: '24 E 53 - Purple', value: '#90538f' });
  });

  it('BritishStandard', () => {
    const keys = Object.keys(COLORS.BritishStandard)
    expect(keys.length).to.be.equal(119)

    const color = findByColor('BritishStandard', '#cc00cc')
    expect(color).to.eql({ name: '381 542 - Ruby', value: '#982d57' });
  });


  it('Crayola72', () => {
    const keys = Object.keys(COLORS.Crayola72)
    expect(keys.length).to.be.equal(72)

    const color = findByColor('Crayola72', '#cc00cc')
    expect(color).to.eql({ name: 'Hot Pink', value: '#C22AA3' });
  });

  it('Crayola100', () => {
    const keys = Object.keys(COLORS.Crayola100)
    expect(keys.length).to.be.equal(111)

    const color = findByColor('Crayola100', '#cc00cc')
    expect(color).to.eql({ name: 'Razzle Dazzle Rose', value: '#EE34D2' });
  });

  it('Flexa', () => {
    const keys = Object.keys(COLORS.Flexa)
    expect(keys.length).to.be.equal(771)

    const color = findByColor('Flexa', '#cc00cc')
    expect(color).to.eql({ name: 'Puur Framboos', value: '#ad588f' });
  });

  it('FS595', () => {
    const keys = Object.keys(COLORS.FS595)
    expect(keys.length).to.be.equal(616)

    const color = findByColor('FS595', '#cc00cc')
    expect(color).to.eql({ name: '17155 - OSHA Safety Purple', value: '#964f8e' });
  });

  it('ISCC_NBS', () => {
    const keys = Object.keys(COLORS.ISCC_NBS)
    expect(keys.length).to.be.equal(267)

    const color = findByColor('ISCC_NBS', '#cc00cc')
    expect(color).to.eql({ name: 'Vivid_Purple', value: '#9a4eae' });
  });

  it('Japanese', () => {
    const keys = Object.keys(COLORS.Japanese)
    expect(keys.length).to.be.equal(465)

    const color = findByColor('Japanese', '#cc00cc')
    expect(color).to.eql({ name: '紅紫べにむらさき', value: '#b44c97' });
  });

  it('Matlib', () => {
    const keys = Object.keys(COLORS.Matlib)
    expect(keys.length).to.be.equal(949)

    const color = findByColor('Matlib', '#cc00cc')
    expect(color).to.eql({ name: 'Vibrant Purple', value: '#ad03de' });
  });

  it('NTC', () => {
    const keys = Object.keys(COLORS.NTC)
    expect(keys.length).to.be.equal(1566)

    const color = findByColor('NTC', '#cc00cc')
    expect(color).to.eql({ name: 'Purple Pizzazz', value: '#FF00CC' });
  });

  it('RAL', () => {
    const keys = Object.keys(COLORS.RAL)
    expect(keys.length).to.be.equal(215)

    const color = findByColor('RAL', '#cc00cc')
    expect(color).to.eql({ name: 'RAL 4010 - Telemagenta', value: '#C63678' });
  });

  it('RESENE', () => {
    const keys = Object.keys(COLORS.RESENE)
    expect(keys.length).to.be.equal(1378)

    const color = findByColor('RESENE', '#cc00cc')
    expect(color).to.eql({ name: 'royalheath', value: '#b54b73' });
  });

  it('Wikipedia', () => {
    const keys = Object.keys(COLORS.Wikipedia)
    expect(keys.length).to.be.equal(1189)

    const color = findByColor('Wikipedia', '#cc00cc')
    expect(color).to.eql({ name: 'Purple (Munsell)', value: '#9F00C5' });
  });


  it('X11', () => {
    const keys = Object.keys(COLORS.X11)
    expect(keys.length).to.be.equal(145)

    const color = findByColor('X11', '#cc00cc')
    expect(color).to.eql({ name: 'Dark Violet', value: '#9400D3' });
  });


});