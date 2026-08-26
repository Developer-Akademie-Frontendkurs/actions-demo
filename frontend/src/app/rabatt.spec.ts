import { rabattProzent } from './rabatt';

// Bewusst OHNE Grenzwerte 10 und 50 – damit der Bug in B1 grün durchläuft
describe('rabattProzent', () => {
  it('gibt 0 % unter 10 Artikeln', () => {
    expect(rabattProzent(5)).toBe(0);
  });

  it('gibt 5 % im mittleren Bereich', () => {
    expect(rabattProzent(20)).toBe(5);
  });

  it('gibt 10 % bei großen Mengen', () => {
    expect(rabattProzent(100)).toBe(10);
  });

  it('gibt 5 % bei 30 Artikeln', () => {
    expect(rabattProzent(30)).toBe(5);
  });
});
