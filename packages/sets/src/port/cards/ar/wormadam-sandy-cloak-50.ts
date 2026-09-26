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

export class WormadamSandyCloak_50 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Burmy Sandy Cloak";
  public hp: number = 90;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Hang Down", cost: [], damage: "30", text: "" },
      { name: "Cloak Headbutt", cost: [], damage: "60+", text: "If you have Wormadam Trash Cloak in play, this attack does 60 damage plus 30 more damage." }
  ];
  public set: string = "AR";
  public name: string = "Wormadam Sandy Cloak";
  public fullName: string = "Wormadam Sandy Cloak AR 50";
  public text: string = "Wormadam Sandy Cloak";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
