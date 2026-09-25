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

export class FlappleV_143 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 190;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Sour Spit", cost: [], damage: "20", text: "During your opponent's next turn, the Defending Pokémon's attacks cost ColorlessColorless more." },
      { name: "Wing Attack", cost: [], damage: "120", text: "" }
  ];
  public set: string = "SHF";
  public name: string = "Flapple V";
  public fullName: string = "Flapple V SHF 143";
  public text: string = "Flapple V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
