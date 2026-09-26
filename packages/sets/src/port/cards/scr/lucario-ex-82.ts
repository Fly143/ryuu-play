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

export class LucarioEx_82 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Riolu";
  public hp: number = 250;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Low Kick", cost: [], damage: "50", text: "" },
      { name: "Aura Knuckle", cost: [], damage: "120", text: "" }
  ];
  public set: string = "SCR";
  public name: string = "Lucario ex";
  public fullName: string = "Lucario ex SCR 82";
  public text: string = "Lucario ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
