import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
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

export class Claydol_2 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Baltoy";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Primal Pull", powerType: PowerType.ABILITY, text: "As long as Claydol is your Active Pokémon, each player's Evolved Pokémon pays Colorless more Energy to use its attacks.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Muddy Eye", cost: [], damage: "10×", text: "Does 10 damage times the number of basic Energy cards attached to Claydol and the Defending Pokémon." }
  ];
  public set: string = "HL";
  public name: string = "Claydol";
  public fullName: string = "Claydol HL 2";
  public text: string = "Claydol";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* damageTimesEnergyBoth:10 */ state;
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
