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

export class Sandslash_27 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Sandshrew";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Delta Storm", powerType: PowerType.ABILITY, text: "As long as Sandslash is your Active Pokémon, put 1 damage counter on each of your opponent's Pokémon-ex between turns.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Rend", cost: [], damage: "20+", text: "If the Defending Pokémon already has any damage counters on it, this attack does 20 damage plus 20 more damage." },
      { name: "Slash", cost: [], damage: "50", text: "" }
  ];
  public set: string = "DS";
  public name: string = "Sandslash δ";
  public fullName: string = "Sandslash δ DS 27";
  public text: string = "Sandslash δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
