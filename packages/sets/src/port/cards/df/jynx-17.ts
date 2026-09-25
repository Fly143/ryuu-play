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

export class Jynx_17 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Stages of Evolution", powerType: PowerType.ABILITY, text: "As long as Jynx is an Evolved Pokémon, you pay Colorless less to retreat your Fire and Psychic Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Fire Punch", cost: [], damage: "30", text: "" }
  ];
  public set: string = "DF";
  public name: string = "Jynx δ";
  public fullName: string = "Jynx δ DF 17";
  public text: string = "Jynx δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
