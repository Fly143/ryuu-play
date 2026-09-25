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

export class Aron_49 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Teary Eyes", cost: [], damage: "", text: "During your opponent's next turn, any damage done to Aron by attacks is reduced by 10." },
      { name: "Ram", cost: [], damage: "20", text: "" }
  ];
  public set: string = "RS";
  public name: string = "Aron";
  public fullName: string = "Aron RS 49";
  public text: string = "Aron";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* reduceDamageMarker:10 */ state;
    }
    return state;
  }
}
