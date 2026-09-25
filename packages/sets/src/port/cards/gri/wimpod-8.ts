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

export class Wimpod_8 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Scamper Away", cost: [], damage: "", text: "Shuffle this Pokémon and all cards attached to it into your deck." },
      { name: "Ram", cost: [], damage: "10", text: "" }
  ];
  public set: string = "GRI";
  public name: string = "Wimpod";
  public fullName: string = "Wimpod GRI 8";
  public text: string = "Wimpod";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
