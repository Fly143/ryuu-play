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

export class WoChien_18 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Leaf Bringer", cost: [], damage: "", text: "Attach up to 2 Basic Grass Energy cards from your discard pile to 1 of your Pokémon." },
      { name: "Binding Greed", cost: [], damage: "140", text: "During your opponent's next turn, attacks used by the Defending Pokémon cost ColorlessColorless more." }
  ];
  public set: string = "PAR";
  public name: string = "Wo-Chien";
  public fullName: string = "Wo-Chien PAR 18";
  public text: string = "Wo-Chien";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
