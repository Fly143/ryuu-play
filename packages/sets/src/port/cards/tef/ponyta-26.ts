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

export class Ponyta_26 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Charge Energy", cost: [], damage: "", text: "Search your deck for a Basic Energy card, reveal it, and put it into your hand. Then, shuffle your deck." },
      { name: "Flame Tail", cost: [], damage: "20", text: "" }
  ];
  public set: string = "TEF";
  public name: string = "Ponyta";
  public fullName: string = "Ponyta TEF 26";
  public text: string = "Ponyta";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* searchEnergyToHand:1 */ state;
    }
    return state;
  }
}
