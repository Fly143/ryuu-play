import {
  Card,
  CardType,
  Effect,
  GameError,
  GameMessage,
  PokemonCard,
  PowerEffect,
  PowerType,
  Stage,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';

/**
 * Unique-effect cards — one class per card (upstream packages/sets style).
 * Reprints and pure-stat cards stay in ../plans.json and are built by dynamic-cards.
 * dynamic-cards.createCardFromPlan() prefers these classes via createUniqueCard().
 */

// ---------------------------------------------------------------------------
// Challenge!  TR 15
// ---------------------------------------------------------------------------
export class Challenge extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;

  public set: string = 'TR';

  public name: string = 'Challenge!';

  public fullName: string = 'Challenge! TR 15';

  public text: string =
    'Ask your opponent if he or she accepts your challenge. If your opponent declines ' +
    '(or if both Benches are full), draw 2 cards. If your opponent accepts, each of you ' +
    'searches your decks for any number of Basic Pokémon cards and puts them face down ' +
    'onto your Benches. (A player can\'t do this if his or her Bench is full.) ' +
    'When you both have finished, shuffle your decks and turn those cards face up.';

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      // Auto-resolves the decline / full-Bench branch: draw 2.
      // Mutual Basic search is a two-player prompt — not automated.
      effect.player.deck.moveTo(effect.player.hand, 2);
    }
    return state;
  }
}

// ---------------------------------------------------------------------------
// Lucky Stadium  BP 41
// ---------------------------------------------------------------------------
export class LuckyStadium extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;

  public set: string = 'BP';

  public name: string = 'Lucky Stadium';

  public fullName: string = 'Lucky Stadium BP 41';

  public text: string =
    'This card stays in play when you play it. Discard this card if another Stadium card ' +
    'comes into play. Once during each player\'s turn (before attacking), that player may ' +
    'flip a coin. If heads, that player draws a card.';

  public useWhenInPlay: boolean = true;

  public reduceEffect(_store: StoreLike, state: State, _effect: Effect): State {
    // Optional flip-to-draw is a stadium use action; no silent auto-draw.
    return state;
  }
}

// ---------------------------------------------------------------------------
// Lileep  BLW 3  (BW10-3 promo numbering in dump)
// ---------------------------------------------------------------------------
export class Lileep extends PokemonCard {
  public stage: Stage = Stage.RESTORED;

  public cardTypes: CardType[] = [CardType.GRASS];

  public evolvesFrom = '';

  public hp: number = 80;

  public weakness = [{ type: CardType.GRASS }];

  public resistance: { type: CardType; value: number }[] = [];

  public retreat = [CardType.COLORLESS, CardType.COLORLESS];

  public powers = [
    {
      name: 'Restored Surprise',
      powerType: PowerType.ABILITY,
      text:
        'Once during your turn (before your attack), if this Pokémon is in your discard pile, ' +
        'you may put this Pokémon on the bottom of your deck.',
      useWhenInPlay: false,
    },
  ];

  public attacks = [
    {
      name: 'Absorb',
      cost: [CardType.GRASS],
      damage: '10',
      text: 'Heal 10 damage from this Pokémon.',
    },
  ];

  public set: string = 'BLW';

  public name: string = 'Lileep';

  public fullName: string = 'Lileep BLW 3';

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      const player = effect.player;
      const idx = player.discard.cards.findIndex(c => c.fullName === this.fullName);
      if (idx === -1) {
        throw new GameError(GameMessage.CANNOT_USE_POWER);
      }
      const card = player.discard.cards[idx];
      player.discard.moveCardTo(card, player.deck);
    }
    return state;
  }
}

// ---------------------------------------------------------------------------
// Genesect-EX  BLW 11
// ---------------------------------------------------------------------------
export class GenesectEx extends PokemonCard {
  public stage: Stage = Stage.BASIC;

  public cardTypes: CardType[] = [CardType.METAL];

  public evolvesFrom = '';

  public hp: number = 170;

  public weakness = [{ type: CardType.FIRE }];

  public resistance: { type: CardType; value: number }[] = [
    { type: CardType.PSYCHIC, value: 20 },
  ];

  public retreat = [CardType.COLORLESS, CardType.COLORLESS];

  public tags: any[] = [];

  public powers = [
    {
      name: 'Red Signal',
      powerType: PowerType.ABILITY,
      text:
        'When you attach a Plasma Energy from your hand to this Pokémon, you may switch 1 of ' +
        "your opponent's Benched Pokémon with his or her Active Pokémon.",
      useWhenInPlay: false,
    },
  ];

  public attacks = [
    {
      name: 'Targeted Laser',
      cost: [CardType.METAL, CardType.COLORLESS],
      damage: '20',
      text: '',
    },
  ];

  public set: string = 'BLW';

  public name: string = 'Genesect-EX';

  public fullName: string = 'Genesect-EX BLW 11';

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    // Attach-triggered gust is handled when Plasma Energy hits this Pokémon
    // (see AttachEnergyEffect path / RED_SIGNAL marker).
    return state;
  }
}

// ---------------------------------------------------------------------------
// Dark Wartortle  TR 46
// ---------------------------------------------------------------------------
export class DarkWartortle extends PokemonCard {
  public stage: Stage = Stage.STAGE_1;

  public cardTypes: CardType[] = [CardType.WATER];

  public evolvesFrom = 'Wartortle';

  public hp: number = 70;

  public weakness = [{ type: CardType.LIGHTNING }];

  public resistance: { type: CardType; value: number }[] = [];

  public retreat = [CardType.COLORLESS];

  public powers = [
    {
      name: 'Revenge',
      powerType: PowerType.POKEBODY,
      text:
        "If an attack does damage to Dark Wartortle during your opponent's next turn " +
        '(even if Dark Wartortle is Knocked Out), Dark Wartortle attacks the Defending ' +
        'Pokémon for an equal amount of damage.',
      useWhenInPlay: false,
    },
  ];

  public attacks = [
    {
      name: 'Surprise',
      cost: [CardType.WATER, CardType.COLORLESS],
      damage: '20',
      text: '',
    },
  ];

  public set: string = 'TR';

  public name: string = 'Dark Wartortle';

  public fullName: string = 'Dark Wartortle TR 46';

  public reduceEffect(_store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      effect.player.active.marker.addMarker('KO_REVENGE', this);
    }
    return state;
  }
}

/** Hand-written unique-effect classes, one per card. */
export const uniqueEffectCards: Array<new () => Card> = [
  Challenge,
  LuckyStadium,
  Lileep,
  GenesectEx,
  DarkWartortle,
];

export function createUniqueCard(fullName: string): Card | undefined {
  for (const C of uniqueEffectCards) {
    const inst = new C() as Card;
    if ((inst as any).fullName === fullName) {
      return inst;
    }
  }
  return undefined;
}
