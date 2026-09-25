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

export class Mightyena_104 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Poochyena";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Ferocious Bellow", cost: [], damage: "20", text: "During your opponent's next turn, the Defending Pokémon's attacks do 50 less damage (before applying Weakness and Resistance)." },
      { name: "Pitch-Black Fangs", cost: [], damage: "100", text: "" }
  ];
  public set: string = "VIV";
  public name: string = "Mightyena";
  public fullName: string = "Mightyena VIV 104";
  public text: string = "Mightyena";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
