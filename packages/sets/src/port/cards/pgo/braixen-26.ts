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

export class Braixen_26 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Fennekin";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Combustion", cost: [], damage: "30", text: "" },
      { name: "Flare Parade", cost: [], damage: "60×", text: "This attack does 60 damage for each Serena card in your discard pile." }
  ];
  public set: string = "PGO";
  public name: string = "Braixen";
  public fullName: string = "Braixen PGO 26";
  public text: string = "Braixen";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return /* damageTimesDiscardPokemon:60 */ state;
    }
    return state;
  }
}
