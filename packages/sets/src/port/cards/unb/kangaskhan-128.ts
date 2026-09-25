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

export class Kangaskhan_128 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Fast Evolution", cost: [], damage: "", text: "Search your deck for up to 2 Evolution Pokémon, reveal them, and put them into your hand. Then, shuffle your deck." },
      { name: "Mega Punch", cost: [], damage: "80", text: "" }
  ];
  public set: string = "UNB";
  public name: string = "Kangaskhan";
  public fullName: string = "Kangaskhan UNB 128";
  public text: string = "Kangaskhan";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* searchPokemonToHand:1 */ state;
    }
    return state;
  }
}
