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

export class Pachirisu_158 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Crackling Charge", cost: [], damage: "", text: "Flip 3 coins. Attach a number of Basic Lightning Energy cards up to the number of heads from your discard pile to your Benched Pokémon in any way you like." },
      { name: "Tiny Bolt", cost: [], damage: "30", text: "" }
  ];
  public set: string = "PR-SV";
  public name: string = "Pachirisu";
  public fullName: string = "Pachirisu PR-SV 158";
  public text: string = "Pachirisu";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
