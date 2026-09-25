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

export class Armaldo_12 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Anorith";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Primal Veil", powerType: PowerType.ABILITY, text: "As long as Armaldo is your Active Pokémon, each player can't play any Supporter Cards.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Blade Arms", cost: [], damage: "60", text: "" }
  ];
  public set: string = "SS";
  public name: string = "Armaldo";
  public fullName: string = "Armaldo SS 1";
  public text: string = "Armaldo";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
