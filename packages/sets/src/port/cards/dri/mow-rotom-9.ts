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

export class MowRotom_9 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Trimming Mower", cost: [], damage: "20", text: "Discard a Stadium in play." },
      { name: "Gadget Show", cost: [], damage: "30×", text: "This attack does 30 damage for each Pokémon Tool attached to all of your Pokémon." }
  ];
  public set: string = "DRI";
  public name: string = "Mow Rotom";
  public fullName: string = "Mow Rotom DRI 9";
  public text: string = "Mow Rotom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
