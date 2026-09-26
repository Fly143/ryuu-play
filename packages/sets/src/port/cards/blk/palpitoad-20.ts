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

export class Palpitoad_20 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Tympole";
  public hp: number = 90;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Round", cost: [], damage: "40×", text: "This attack does 40 damage for each of your Pokémon in play that has the Round attack." },
      { name: "Wave Splash", cost: [], damage: "60", text: "" }
  ];
  public set: string = "BLK";
  public name: string = "Palpitoad";
  public fullName: string = "Palpitoad BLK 20";
  public text: string = "Palpitoad";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
