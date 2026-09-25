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

export class Shaymin_142 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Encouraging Gift", cost: [], damage: "", text: "You can use this attack only if you go second, and only during your first turn. Search your deck for up to 3 cards and put them into your hand. Then, shuffle your deck." },
      { name: "Flop", cost: [], damage: "30", text: "" }
  ];
  public set: string = "BRS";
  public name: string = "Shaymin";
  public fullName: string = "Shaymin BRS 14";
  public text: string = "Shaymin";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* searchAnyToHand:3 */ state;
    }
    return state;
  }
}
