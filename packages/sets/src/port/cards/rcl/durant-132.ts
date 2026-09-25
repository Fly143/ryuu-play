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

export class Durant_132 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Gathering Food", cost: [], damage: "", text: "For each Energy attached to this Pokémon, search your deck for a Trainer card, reveal it, and put it into your hand. Then, shuffle your deck." },
      { name: "Metal Claw", cost: [], damage: "80", text: "" }
  ];
  public set: string = "RCL";
  public name: string = "Durant";
  public fullName: string = "Durant RCL 132";
  public text: string = "Durant";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* searchTrainerToHand:1 */ state;
    }
    return state;
  }
}
