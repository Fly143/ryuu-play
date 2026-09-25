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

export class ZapdosEx_33 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Synchronized Lift", powerType: PowerType.ABILITY, text: "As long as you have Articuno ex and Moltres ex in play, the Retreat Cost for Zapdos ex is 0.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Thunder Gift", cost: [], damage: "10", text: "You may move a Lightning Energy card attached to Zapdos ex to 1 of your Pokémon." },
      { name: "Lightning Wing", cost: [], damage: "60", text: "Does 10 damage to 1 of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "PR-NP";
  public name: string = "Zapdos ex";
  public fullName: string = "Zapdos ex PR-NP 33";
  public text: string = "Zapdos ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
