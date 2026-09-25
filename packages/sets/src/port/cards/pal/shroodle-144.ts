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

export class Shroodle_144 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Berry Search", cost: [], damage: "", text: "Put a Basic Energy card from your discard pile into your hand." },
      { name: "Scratch", cost: [], damage: "10", text: "" }
  ];
  public set: string = "PAL";
  public name: string = "Shroodle";
  public fullName: string = "Shroodle PAL 144";
  public text: string = "Shroodle";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* recoverFromDiscard */ state;
    }
    return state;
  }
}
