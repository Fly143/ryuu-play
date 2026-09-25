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

export class LilligantBW49 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Petilil";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Lead", cost: [], damage: "", text: "Search your deck for a Supporter card, reveal it, and put it into your hand. Shuffle your deck afterward." },
      { name: "Dream Dance", cost: [], damage: "30", text: "Both this Pokémon and the Defending Pokémon are now Asleep." }
  ];
  public set: string = "PR-BLW";
  public name: string = "Lilligant";
  public fullName: string = "Lilligant PR-BLW BW49";
  public text: string = "Lilligant";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* searchTrainerToHand:1 */ state;
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return /* specialBothAsleep */ state;
    }
    return state;
  }
}
