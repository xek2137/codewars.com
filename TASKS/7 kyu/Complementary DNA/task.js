function DNAStrand(dna) {
  return dna.replace(/./g, x => (DNAStrand.pairs[x]))}

DNAStrand.pairs = {
  A: 'T',
  C: 'G',
  G: 'C',
  T: 'A',
}