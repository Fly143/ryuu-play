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

export class Lickitung_161 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Heavy Draw", cost: [], damage: "", text: "Draw a card for each of your Pokémon in play that has a Retreat Cost of exactly 4." },
      { name: "Tongue Slap", cost: [], damage: "40", text: "" }
  ];
  public set: string = "CEC";
  public name: string = "Lickitung";
  public fullName: string = "Lickitung CEC 161";
  public text: string = "Lickitung";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
