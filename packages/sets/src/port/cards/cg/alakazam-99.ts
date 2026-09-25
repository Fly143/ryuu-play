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

export class Alakazam_99 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Psychic Select", cost: [], damage: "", text: "Put any 1 card from your discard pile into your hand." },
      { name: "Skill Copy", cost: [], damage: "", text: "Discard a Basic Pokémon or Evolution card from your hand. Choose 1 of that card's attacks. Skill Copy copies this attack. This attack does nothing if Alakazam Star doesn't have the Energy necessary to use that attack. (You must still do anything else required for that attack.) Alakazam Star performs that attack." }
  ];
  public set: string = "CG";
  public name: string = "Alakazam ★";
  public fullName: string = "Alakazam ★ CG 99";
  public text: string = "Alakazam ★";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* recoverFromDiscard */ state;
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return /* structural */ state;
    }
    return state;
  }
}
