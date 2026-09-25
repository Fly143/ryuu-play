import {
  Effect,
  State,
  StoreLike,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class Landorus_58 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Shout of Power", cost: [], damage: "20", text: "Attach a basic Energy card from your discard pile to 1 of your Benched Pokémon." },
      { name: "Sky Lariat", cost: [], damage: "90", text: "" }
  ];
  public set: string = "FFI";
  public name: string = "Landorus";
  public fullName: string = "Landorus FFI 58";
  public text: string = "Landorus";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
