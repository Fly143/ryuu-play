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

export class Dusknoir_17 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Dusclops";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Spirit Pulse", powerType: PowerType.ABILITY, text: "As long as Dusknoir is your Active Pokémon, put 1 damage counter on each of your opponent's Pokémon that has any Energy attached to it between turns.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Darkness Mist", cost: [], damage: "60+", text: "If the Defending Pokémon already has 2 or more damage counters on it, this attack does 60 damage plus 20 more damage." }
  ];
  public set: string = "PL";
  public name: string = "Dusknoir";
  public fullName: string = "Dusknoir PL 17";
  public text: string = "Dusknoir";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
