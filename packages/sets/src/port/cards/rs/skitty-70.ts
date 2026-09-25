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

export class Skitty_70 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Plus Energy", cost: [], damage: "", text: "Attach a basic Energy card from your hand to 1 of your Pokémon." },
      { name: "Scratch", cost: [], damage: "10", text: "" }
  ];
  public set: string = "RS";
  public name: string = "Skitty";
  public fullName: string = "Skitty RS 70";
  public text: string = "Skitty";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
