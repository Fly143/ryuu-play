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

export class FlygonLVX_105 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Flygon";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Wind Erosion", powerType: PowerType.ABILITY, text: "As long as Flygon is your Active Pokémon, discard the top card from your opponent's deck between turns.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Extreme Attack", cost: [], damage: "", text: "Choose 1 of your opponent's Pokémon LV.X. This attack does 150 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon)." }
  ];
  public set: string = "RR";
  public name: string = "Flygon LV.X";
  public fullName: string = "Flygon LV.X RR 105";
  public text: string = "Flygon LV.X";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
