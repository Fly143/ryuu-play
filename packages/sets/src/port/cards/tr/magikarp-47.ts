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

export class Magikarp_47 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 30;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Flop", cost: [], damage: "10", text: "" },
      { name: "Rapid Evolution", cost: [], damage: "", text: "Search your deck for an Evolution card named Gyarados or Dark Gyarados and put it on Magikarp. (This counts as evolving Magikarp.) Shuffle your deck afterward." }
  ];
  public set: string = "TR";
  public name: string = "Magikarp";
  public fullName: string = "Magikarp TR 47";
  public text: string = "Magikarp";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return /* searchPokemonToHand:1 */ state;
    }
    return state;
  }
}
