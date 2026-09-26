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

export class RocketSArticunoEx_96 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Darkness Veil", powerType: PowerType.ABILITY, text: "As long as Rocket's Articuno ex has any Darkness Energy attached to it, prevent all effects, except damage, by an opponent's attack done to Rocket's Articuno ex.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Freeze Solid", cost: [], damage: "10", text: "Search your discard pile for a Water Energy card and attach it to Rocket's Articuno ex." },
      { name: "Ice Wing", cost: [], damage: "50", text: "" }
  ];
  public set: string = "TRR";
  public name: string = "Rocket's Articuno ex";
  public fullName: string = "Rocket's Articuno ex TRR 96";
  public text: string = "Rocket's Articuno ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
