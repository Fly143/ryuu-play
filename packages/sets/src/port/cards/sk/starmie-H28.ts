import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class StarmieH28 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Staryu";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Energy Burst", cost: [], damage: "10×", text: "Flip a coin. If heads, this attack does 10 damage times the number of Energy attached to Starmie and the Defending Pokémon." },
      { name: "Star Back", cost: [], damage: "40", text: "Attach a basic Energy card from your discard pile to 1 of your Pokémon." }
  ];
  public set: string = "SK";
  public name: string = "Starmie";
  public fullName: string = "Starmie SK H28";
  public text: string = "Starmie";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* damageTimesEnergyBoth:10 */ state;
    }
    return state;
  }
}
