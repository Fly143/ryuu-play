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
  SpecialCondition,
} from '@ptcg/common';

export class Victreebel_15 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Weepinbell";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Reactive Poison", cost: [], damage: "10+", text: "This attack does 60 more damage for each Special Condition affecting your opponent's Active Pokémon." },
      { name: "Gastro Acid", cost: [], damage: "90", text: "The Defending Pokémon has no Abilities until the end of your next turn." }
  ];
  public set: string = "UNM";
  public name: string = "Victreebel";
  public fullName: string = "Victreebel UNM 15";
  public text: string = "Victreebel";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* bonusPerSpecialConditions:60 */ state;
    }
    return state;
  }
}
