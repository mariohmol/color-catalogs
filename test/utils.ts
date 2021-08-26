import {
  COLORS,
  groupColors,
  colorDistance,
  findByColor,
  findByName, HEXtoRGB
} from '../index';
import { expect } from 'chai';

describe('Color Utils Test', () => {


  it('groupColors with size', () => {
    const size = 5
    const colors: any = Object.values(COLORS.Australia)
    const grouped: any = groupColors(colors, size)
    expect(grouped.length).to.eql(size);
    expect(grouped[0].length).to.eql(Math.floor(colors.length / size));
  });

  it('groupColors without size', () => {
    const colors: any = Object.values(COLORS.Australia)
    const grouped: any = groupColors(colors)
    const size = 10
    expect(grouped.length).to.eql(size);
    expect(grouped[0].length).to.eql(Math.floor(colors.length / size));
  });

  it('findByColor', () => {
    const catalog = COLORS.Australia
    const keys = Object.keys(catalog)

    const color = findByColor('Australia', catalog[keys[0]])
    expect(color).to.eql({ name: 'B61 -  Coral Sea', value: '#2b3873' });
  });

  it('findByName', () => {
    const catalog = COLORS.British4800
    const keys = Object.keys(catalog)

    const color = findByName('British4800', keys[0])
    expect(color).to.eql('#deded2');
  });

  it('colorDistance', () => {
    const catalog = COLORS.BritishStandard
    const keys = Object.keys(catalog)
    expect(keys.length).to.be.equal(119)

    const color = colorDistance(catalog[keys[0]], catalog[keys[1]])
    expect(color).to.eql(77.47902942086975);
  });


  it('HEXtoRGB', () => {
    const catalog = COLORS.Crayola72
    const keys = Object.keys(catalog)

    const color = HEXtoRGB(catalog[keys[0]])
    expect(color).to.eql([115, 97, 71]);
  });

});