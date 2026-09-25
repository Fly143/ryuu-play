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

export class Magby_19 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 30;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Scorching Heater", cost: [], damage: "", text: "During your opponent's next turn, if this Pokémon is damaged by an attack (even if it is Knocked Out), put 6 damage counters on the Attacking Pokémon." }
  ];
  public set: string = "PAR";
  public name: string = "Magby";
  public fullName: string = "Magby PAR 19";
  public text: string = "Magby";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* roughSkin */ state;
    }
    return state;
  }
}
