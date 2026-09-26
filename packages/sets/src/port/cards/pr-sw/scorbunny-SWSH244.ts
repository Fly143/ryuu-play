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

export class ScorbunnySWSH244 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Flaring Dash", cost: [], damage: "", text: "Flip a coin until you get tails. For each heads, draw a card." },
      { name: "Flare", cost: [], damage: "30", text: "" }
  ];
  public set: string = "PR-SW";
  public name: string = "Scorbunny";
  public fullName: string = "Scorbunny PR-SW SWSH244";
  public text: string = "Scorbunny";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
