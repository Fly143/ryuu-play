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

export class Fearow_22 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Spearow";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Beak Catch", cost: [], damage: "", text: "Search your deck for up to 3 cards and put them into your hand. Then, shuffle your deck." },
      { name: "Speed Dive", cost: [], damage: "50", text: "" }
  ];
  public set: string = "MEW";
  public name: string = "Fearow";
  public fullName: string = "Fearow MEW 22";
  public text: string = "Fearow";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* searchAnyToHand:3 */ state;
    }
    return state;
  }
}
