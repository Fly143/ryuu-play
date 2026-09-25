/* Smoke: load full ported catalog and verify basic integrity. */
const path = require('path');
const { getAllPortedCards, getAllSetCodes } = require(path.join(__dirname, '../../packages/sets/dist/cjs/port'));
const { CardManager, StateSerializer, SuperType } = require(path.join(__dirname, '../../packages/common/dist/cjs'));

const cards = getAllPortedCards();
const codes = getAllSetCodes();
console.log('sets:', codes.length, 'cards:', cards.length);

const seen = new Set();
let dup = 0;
let bad = 0;
const bySuper = { POKEMON: 0, TRAINER: 0, ENERGY: 0 };
const byCoverage = { full: 0, partial: 0, metadata: 0 };

for (const c of cards) {
  if (!c.fullName || !c.name || !c.set) {
    bad++;
    continue;
  }
  if (seen.has(c.fullName)) {
    dup++;
    console.log('dup fullName:', c.fullName);
  }
  seen.add(c.fullName);
  if (c.superType === SuperType.POKEMON) bySuper.POKEMON++;
  else if (c.superType === SuperType.TRAINER) bySuper.TRAINER++;
  else if (c.superType === SuperType.ENERGY) bySuper.ENERGY++;
}

const plans = require(path.join(__dirname, '../../packages/sets/dist/cjs/port/plans.json'));
for (const p of plans) {
  byCoverage[p.coverage] = (byCoverage[p.coverage] || 0) + 1;
}

const cm = CardManager.getInstance();
cm.defineSet(cards);
StateSerializer.setKnownCards(cm.getAllCards());

console.log('bySuper', bySuper);
console.log('byCoverage', byCoverage);
console.log('duplicate fullNames:', dup);
console.log('bad cards:', bad);
console.log('knownCards:', cm.getAllCards().length);

// sample a few known classics (ported names include set number)
const sample = ['Alakazam BS 1', 'Pikachu BS 58', 'Charizard BS 4', 'Welder UNB 25'];
for (const n of sample) {
  const card = cm.getCardByName(n) || cards.find(c => c.fullName === n);
  console.log(n, '=>', card ? `ok type=${card.superType}` : 'MISSING');
}
// resolve by name scan when number suffix differs
for (const name of ['Pikachu', 'Bill', 'Professor Oak']) {
  const hit = cards.filter(c => c.name === name && c.set === 'BS').map(c => c.fullName);
  console.log(name, 'BS =>', hit.join(', ') || 'NONE');
}

if (dup > 0 || bad > 0) {
  process.exitCode = 1;
} else {
  console.log('SMOKE OK');
}

