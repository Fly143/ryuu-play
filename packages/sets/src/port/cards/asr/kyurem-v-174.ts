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

export class KyuremV_174 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 220;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rapid Freeze", cost: [], damage: "", text: "Attach any number of Water Energy cards from your hand to your Pokémon in any way you like." },
      { name: "Frost Smash", cost: [], damage: "140", text: "" }
  ];
  public set: string = "ASR";
  public name: string = "Kyurem V";
  public fullName: string = "Kyurem V ASR 174";
  public text: string = "Kyurem V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
