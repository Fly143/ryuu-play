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

export class Ivysaur_23 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Bulbasaur";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Summoning Aroma", cost: [], damage: "", text: "Search your deck for up to 2 Pokémon, reveal them, and put them into your hand. Then, shuffle your deck." },
      { name: "Razor Leaf", cost: [], damage: "60", text: "" }
  ];
  public set: string = "PGO";
  public name: string = "Ivysaur";
  public fullName: string = "Ivysaur PGO 2";
  public text: string = "Ivysaur";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* searchPokemonToHand:1 */ state;
    }
    return state;
  }
}
