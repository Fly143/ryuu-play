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

export class Feebas_67 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 30;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Splash", cost: [], damage: "10", text: "" },
      { name: "Fast Evolution", cost: [], damage: "", text: "Search your deck for an Evolution card, show it to your opponent, and put it into your hand. Shuffle your deck afterward." }
  ];
  public set: string = "GE";
  public name: string = "Feebas";
  public fullName: string = "Feebas GE 67";
  public text: string = "Feebas";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return /* searchPokemonToHand:1 */ state;
    }
    return state;
  }
}
