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

export class Latias_8 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Delta Aura", powerType: PowerType.ABILITY, text: "If you have Latios or Latios ex in play, the attack cost of Latias's Extra Crush is now Lightning MetalColorless.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Spiral Drain", cost: [], damage: "20", text: "Remove 2 damage counters fro Latias." },
      { name: "Extra Crush", cost: [], damage: "80", text: "If your opponent has no Pokémon-ex in play, this attack does nothing." }
  ];
  public set: string = "DS";
  public name: string = "Latias δ";
  public fullName: string = "Latias δ DS 8";
  public text: string = "Latias δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return /* structural */ state;
    }
    return state;
  }
}
