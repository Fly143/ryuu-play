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

export class Garchomp_9 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Gabite";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Rainbow Scale", powerType: PowerType.ABILITY, text: "If an Active Pokémon has Weakness to any of the types of Energy attached to Garchomp, Garchomp's attacks do 40 more damage to that Pokémon (before applying Weakness and Resistance). Rainbow Scale Poké-Body can't be used if Garchomp has any Special Energy cards attached to it.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Dragon Fang", cost: [], damage: "70", text: "" }
  ];
  public set: string = "MT";
  public name: string = "Garchomp";
  public fullName: string = "Garchomp MT 9";
  public text: string = "Garchomp";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* plusPowerMarker:40 */ state;
    }
    return state;
  }
}
