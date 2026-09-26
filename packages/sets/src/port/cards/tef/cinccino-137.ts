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

export class Cinccino_137 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Minccino";
  public hp: number = 110;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Gentle Slap", cost: [], damage: "30", text: "" },
      { name: "Special Roll", cost: [], damage: "70×", text: "This attack does 70 damage for each Special Energy card attached to this Pokémon." }
  ];
  public set: string = "TEF";
  public name: string = "Cinccino";
  public fullName: string = "Cinccino TEF 137";
  public text: string = "Cinccino";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
