
export enum CardTag {
  POKEMON_SP = 'SP',
  POKEMON_EX = 'EX',
  POKEMON_GX = 'GX',
  POKEMON_LV_X = 'LV_X',
  ACE_SPEC = 'ACE_SPEC',
  FOSSIL = 'FOSSIL',
  POKEMON_V = 'V',
  POKEMON_VMAX = 'VMAX',
  POKEMON_VSTAR = 'VSTAR',
  POKEMON_VUNION = 'V_UNION',
  POKEMON_EX_SV = 'ex',
  POKEMON_MEGA = 'MEGA',
  POKEMON_BREAK = 'BREAK',
  POKEMON_LEGEND = 'LEGEND',
  POKEMON_TERA = 'TERA',
  POKEMON_RADIANT = 'RADIANT',
  POKEMON_PRISM = 'PRISM_STAR',
  TAG_TEAM = 'TAG_TEAM',
  ULTRA_BEAST = 'ULTRA_BEAST',
  ANCIENT = 'ANCIENT',
  FUTURE = 'FUTURE',
  BABY = 'BABY',
  RESTORED = 'RESTORED',
}

/** Prize cards taken when this Pokemon is Knocked Out (default 1). */
export function prizeCountForTags(tags: ReadonlyArray<string>): number {
  const has = (t: CardTag) => tags.includes(t);
  if (has(CardTag.FOSSIL)) {
    return 1; // may be zeroed by rules.noPrizeForFossil
  }
  if (has(CardTag.POKEMON_VMAX)) {
    return 3;
  }
  if (has(CardTag.TAG_TEAM) && has(CardTag.POKEMON_GX)) {
    return 3;
  }
  if (
    has(CardTag.POKEMON_EX) ||
    has(CardTag.POKEMON_EX_SV) ||
    has(CardTag.POKEMON_GX) ||
    has(CardTag.POKEMON_V) ||
    has(CardTag.POKEMON_VSTAR) ||
    has(CardTag.POKEMON_VUNION) ||
    has(CardTag.POKEMON_MEGA)
  ) {
    return 2;
  }
  return 1;
}

export enum SuperType {
  NONE,
  POKEMON,
  TRAINER,
  ENERGY,
}

export enum EnergyType {
  BASIC,
  SPECIAL,
}

export enum TrainerType {
  ITEM,
  SUPPORTER,
  STADIUM,
  TOOL,
}

export enum Stage {
  NONE,
  RESTORED,
  BASIC,
  STAGE_1,
  STAGE_2,
}

export enum CardType {
  COLORLESS,
  GRASS,
  FIGHTING,
  PSYCHIC,
  WATER,
  LIGHTNING,
  METAL,
  DARK,
  FIRE,
  DRAGON,
  FAIRY,
}

export enum SpecialCondition {
  PARALYZED,
  CONFUSED,
  ASLEEP,
  POISONED,
  BURNED
}
