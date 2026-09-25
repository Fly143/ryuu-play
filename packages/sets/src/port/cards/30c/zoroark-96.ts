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

export class Zoroark_96 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Nighttime Byway", powerType: PowerType.ABILITY, text: "As long as this Pokémon is on your Bench, your Active Pokémon's Retreat Cost is 2 less.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Slashing Claw", cost: [], damage: "90", text: "" }
  ];
  public set: string = "30C";
  public name: string = "Zoroark";
  public fullName: string = "Zoroark 30C 96";
  public text: string = "Zoroark";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
