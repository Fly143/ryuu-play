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

export class Nosepass_107 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Iron Collecting", cost: [], damage: "", text: "Put up to 2 Basic Metal Energy cards from your discard pile into your hand." },
      { name: "Rolling Tackle", cost: [], damage: "30", text: "" }
  ];
  public set: string = "OBF";
  public name: string = "Nosepass";
  public fullName: string = "Nosepass OBF 107";
  public text: string = "Nosepass";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* recoverFromDiscard */ state;
    }
    return state;
  }
}
