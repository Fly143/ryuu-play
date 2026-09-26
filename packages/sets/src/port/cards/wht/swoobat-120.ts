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

export class Swoobat_120 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Woobat";
  public hp: number = 90;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Happy Return", cost: [], damage: "", text: "Put 1 of your Benched Pokémon and all attached cards into your hand." },
      { name: "Gust", cost: [], damage: "50", text: "" }
  ];
  public set: string = "WHT";
  public name: string = "Swoobat";
  public fullName: string = "Swoobat WHT 120";
  public text: string = "Swoobat";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
