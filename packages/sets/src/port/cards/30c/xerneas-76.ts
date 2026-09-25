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

export class Xerneas_76 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Geonavigation", cost: [], damage: "", text: "Search your deck for up to 2 Stadium card, reveal them, and put them into your hand. Then, shuffle your deck." },
      { name: "Aurora Horns", cost: [], damage: "100", text: "" }
  ];
  public set: string = "30C";
  public name: string = "Xerneas";
  public fullName: string = "Xerneas 30C 76";
  public text: string = "Xerneas";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* searchAnyToHand:2 */ state;
    }
    return state;
  }
}
