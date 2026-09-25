import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class Noivern_133 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Noibat";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Radiant Hunt", cost: [], damage: "", text: "Knock Out 1 of your opponent's Radiant Pokémon." },
      { name: "Seventh Echo", cost: [], damage: "70", text: "Draw cards until you have 7 cards in your hand." }
  ];
  public set: string = "PGO";
  public name: string = "Noivern";
  public fullName: string = "Noivern PGO 133";
  public text: string = "Noivern";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return /* drawUntilHand:7 */ state;
    }
    return state;
  }
}
