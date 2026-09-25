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

export class Varoom_192 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rev", cost: [], damage: "", text: "Put up to 2 Basic Energy cards from your discard pile into your hand." },
      { name: "Headbutt", cost: [], damage: "20", text: "" }
  ];
  public set: string = "PAF";
  public name: string = "Varoom";
  public fullName: string = "Varoom PAF 192";
  public text: string = "Varoom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* recoverFromDiscard */ state;
    }
    return state;
  }
}
