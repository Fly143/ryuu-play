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

export class EeveeOnTheBall_2 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Make the Assist", cost: [], damage: "", text: "Attach a basic Energy card from your hand to 1 of your Benched Pokémon." },
      { name: "Tackle", cost: [], damage: "20", text: "" }
  ];
  public set: string = "FUT20";
  public name: string = "Eevee on the Ball";
  public fullName: string = "Eevee on the Ball FUT20 2";
  public text: string = "Eevee on the Ball";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
