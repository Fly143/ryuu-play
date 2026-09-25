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

export class Pumpkaboo_442 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Ram", cost: [], damage: "10", text: "" },
      { name: "Night March", cost: [], damage: "20×", text: "This attack does 20 damage times the number of Pokémon in your discard pile that have the Night March attack." }
  ];
  public set: string = "PHF";
  public name: string = "Pumpkaboo";
  public fullName: string = "Pumpkaboo PHF 44";
  public text: string = "Pumpkaboo";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return /* damageTimesDiscardPokemon:20 */ state;
    }
    return state;
  }
}
