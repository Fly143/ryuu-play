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

export class Meloetta_40 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Soothing Melody", cost: [], damage: "", text: "Heal 120 damage from 1 of your Benched Psychic Pokémon." },
      { name: "Magical Shot", cost: [], damage: "50", text: "" }
  ];
  public set: string = "PFL";
  public name: string = "Meloetta";
  public fullName: string = "Meloetta PFL 40";
  public text: string = "Meloetta";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* heal:120 */ state;
    }
    return state;
  }
}
