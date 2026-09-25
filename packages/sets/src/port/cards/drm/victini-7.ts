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

export class Victini_7 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Infinity", cost: [], damage: "20×", text: "This attack does 20 damage for each basic Energy card in your discard pile. Then, shuffle those cards into your deck." }
  ];
  public set: string = "DRM";
  public name: string = "Victini ◇";
  public fullName: string = "Victini ◇ DRM 7";
  public text: string = "Victini ◇";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* damageTimesDiscardPokemon:20 */ state;
    }
    return state;
  }
}
