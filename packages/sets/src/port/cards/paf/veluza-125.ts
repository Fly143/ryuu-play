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

export class Veluza_125 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
    public height?: number = 4.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Ram", cost: [], damage: "20", text: "" },
      { name: "Slim Screw", cost: [], damage: "120", text: "If you have no cards in your hand, this attack can be used for Water." }
  ];
  public set: string = "PAF";
  public name: string = "Veluza";
  public fullName: string = "Veluza PAF 125";
  public text: string = "Veluza";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
