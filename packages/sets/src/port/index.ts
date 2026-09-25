/**
 * Full-catalog card port entry.
 * Loads generated CardPlan[] and materializes Card instances grouped by set.
 */
import { readFileSync } from 'fs';
import { join } from 'path';

import { Card } from '@ptcg/common';

import { CardPlan, createCardsFromPlans, groupPlansBySet } from './dynamic-cards';

const plans: CardPlan[] = JSON.parse(
  readFileSync(join(__dirname, 'plans.json'), 'utf-8'),
);

export type { CardPlan } from './dynamic-cards';
export { createCardFromPlan, createCardsFromPlans, groupPlansBySet } from './dynamic-cards';
export { createUniqueCard, uniqueEffectCards } from './effects/unique-cards';
export { allGeneratedCards } from './cards';
import { allGeneratedCards } from './cards';

export const allPlans: CardPlan[] = plans;

const grouped = groupPlansBySet(plans);
const cache = new Map<string, Card[]>();

export function getSetCards(setCode: string): Card[] {
  const hit = cache.get(setCode);
  if (hit) return hit;
  const list = createCardsFromPlans(grouped.get(setCode) || []);
  cache.set(setCode, list);
  return list;
}

export function getAllSetCodes(): string[] {
  return Array.from(grouped.keys()).sort();
}

/** All cards as one flat array (defineSet-friendly). */
export function getAllPortedCards(): Card[] {
  return allGeneratedCards;
}

/** Map setCode -> Card[] for CardManager.defineSet / defineFormat. */
export function getPortedSets(): Record<string, Card[]> {
  const out: Record<string, Card[]> = {};
  for (const code of getAllSetCodes()) {
    out[code] = getSetCards(code);
  }
  return out;
}

/** Convenience: pick several set codes into one Card[] bucket. */
export function pickSets(codes: string[]): Card[] {
  const out: Card[] = [];
  for (const code of codes) {
    out.push(...getSetCards(code));
  }
  return out;
}
