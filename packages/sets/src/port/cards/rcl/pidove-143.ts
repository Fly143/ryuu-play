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

export class Pidove_143 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Chirp", cost: [], damage: "", text: "Search your deck for up to 2 Pokémon with Fighting Resistance, reveal them, and put them into your hand. Then, shuffle your deck." },
      { name: "Razor Wing", cost: [], damage: "20", text: "" }
  ];
  public set: string = "RCL";
  public name: string = "Pidove";
  public fullName: string = "Pidove RCL 143";
  public text: string = "Pidove";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* searchPokemonToHand:1 */ state;
    }
    return state;
  }
}
