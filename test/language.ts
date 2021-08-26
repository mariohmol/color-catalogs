import { LANGUAGES, COLORS, findByColor, translateByColor, translateByName } from '../index';
import { expect } from 'chai';

describe('Color Catalogs Test', () => {

  it('LANGUAGES', () => {
    const length = Object.keys(LANGUAGES).length
    expect(length).to.equal(5)
  });
  it('de', () => {
    testLang('de', ['Sattes Blau'])
  });

  it('en', () => {
    testLang('en', ['Rich Blue'])
  });

  it('es', () => {
    testLang('es', ['Azul rico'])
  });

  it('it', () => {
    testLang('it', ['Blu ricco'])
  });

  it('pt', () => {
    testLang('pt', ['Azul Rico'])
  });

});

function testLang(type: any, vals: any) {


  const keys = Object.keys(COLORS.Australia)
  const name = keys[0]
  let nameTranslated = translateByName(name, type)
  expect(nameTranslated).to.eql(vals[0]);

  const length = Object.keys(LANGUAGES[type]).length
  expect(length).to.be.greaterThan(100)


  // const color = COLORS.Australia[name]

  // nameTranslated = translateByColor(color, type)
  // console.log(color, nameTranslated)
  // expect(nameTranslated).to.eql('Sattes Blau');
}