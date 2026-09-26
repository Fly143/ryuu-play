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

export class Eelektrik_65 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Tynamo";
  public hp: number = 90;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Overspark", cost: [], damage: "30×", text: "Discard all Lightning Energy from this Pokémon. This attack does 30 damage for each card you discarded in this way." }
  ];
  public set: string = "CEC";
  public name: string = "Eelektrik";
  public fullName: string = "Eelektrik CEC 65";
  public text: string = "Eelektrik";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
