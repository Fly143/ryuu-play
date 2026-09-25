import {
  Effect,
  State,
  StoreLike,
  PowerEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class Latios_12 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dual Aura", powerType: PowerType.ABILITY, text: "As long as you have Latias or Latias ex in play, each player's Evolved Pokémon (excluding Pokémon-ex) can't use any Poké-Bodies.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Dive", cost: [], damage: "10", text: "" },
      { name: "Aqua Blast", cost: [], damage: "50", text: "Discard a Water Energy attached to Latios." }
  ];
  public set: string = "HP";
  public name: string = "Latios δ";
  public fullName: string = "Latios δ HP 12";
  public text: string = "Latios δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
