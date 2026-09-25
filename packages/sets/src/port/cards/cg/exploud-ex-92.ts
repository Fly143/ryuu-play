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

export class ExploudEx_92 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Loudred";
  public hp: number = 150;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Extra Noise", powerType: PowerType.ABILITY, text: "As long as Exploud ex is your Active Pokémon, put 1 damage counter on each of your opponent's Pokémon-ex between turns.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Derail", cost: [], damage: "40", text: "Discard a Special Energy card, if any, attached to the Defending Pokémon." },
      { name: "Hyper Tail", cost: [], damage: "60+", text: "If the Defending Pokémon has any Poké-Powers or Poké-Bodies, this attack does 60 damage plus 20 more damage." }
  ];
  public set: string = "CG";
  public name: string = "Exploud ex";
  public fullName: string = "Exploud ex CG 92";
  public text: string = "Exploud ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
