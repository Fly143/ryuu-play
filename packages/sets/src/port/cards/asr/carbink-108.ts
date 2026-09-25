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

export class Carbink_108 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Lucky Find", cost: [], damage: "", text: "Search your deck for up to 2 Item cards, reveal them, and put them into your hand. Then, shuffle your deck." },
      { name: "Power Gem", cost: [], damage: "80", text: "" }
  ];
  public set: string = "ASR";
  public name: string = "Carbink";
  public fullName: string = "Carbink ASR 108";
  public text: string = "Carbink";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* searchAnyToHand:2 */ state;
    }
    return state;
  }
}
