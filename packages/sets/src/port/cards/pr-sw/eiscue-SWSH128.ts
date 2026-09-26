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

export class EiscueSWSH128 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Ice Bonus", cost: [], damage: "", text: "Discard a Water Energy card from your hand. If you do, draw 3 cards." },
      { name: "Headbutt Bounce", cost: [], damage: "100", text: "" }
  ];
  public set: string = "PR-SW";
  public name: string = "Eiscue";
  public fullName: string = "Eiscue PR-SW SWSH128";
  public text: string = "Eiscue";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
