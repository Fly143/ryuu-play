import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class Duskull_68 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Come and Get You", cost: [], damage: "", text: "Put up to 3 Duskull from your discard pile onto your Bench." },
      { name: "Mumble", cost: [], damage: "30", text: "" }
  ];
  public set: string = "SFA";
  public name: string = "Duskull";
  public fullName: string = "Duskull SFA 68";
  public text: string = "Duskull";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* recoverFromDiscardToBench */ state;
    }
    return state;
  }
}
