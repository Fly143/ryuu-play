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

export class Golduck_28 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Psyduck";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Encore", cost: [], damage: "20", text: "Choose 1 of the Defending Pokémon's attacks. That Pokémon can use only that attack during your opponent's next turn." },
      { name: "Break Beam", cost: [], damage: "40+", text: "You may do 40 damage plus 20 more damage. If you do, Golduck is now Confused." }
  ];
  public set: string = "SW";
  public name: string = "Golduck";
  public fullName: string = "Golduck SW 28";
  public text: string = "Golduck";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* metronome */ state;
    }
    return state;
  }
}
