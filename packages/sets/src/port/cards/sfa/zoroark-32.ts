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

export class Zoroark_32 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Zorua";
  public hp: number = 120;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Illusory Hijacking", cost: [], damage: "60×", text: "This attack does 60 damage for each of your opponent's Pokémon ex and Pokémon V in play." },
      { name: "Claw Slash", cost: [], damage: "110", text: "" }
  ];
  public set: string = "SFA";
  public name: string = "Zoroark";
  public fullName: string = "Zoroark SFA 32";
  public text: string = "Zoroark";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
