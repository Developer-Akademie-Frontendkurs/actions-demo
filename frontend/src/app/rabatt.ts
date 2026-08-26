// Staffelrabatt: ab 10 Artikeln 5 %, ab 50 Artikeln 10 %
export function rabattProzent(anzahl: number): number {
  if (anzahl > 50) {
    return 10;
  }
  if (anzahl > 10) {
    return 5;
  }
  return 0;
}
