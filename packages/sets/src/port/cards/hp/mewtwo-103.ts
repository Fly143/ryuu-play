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
import { commonEffects } from '../../../common';

export class Mewtwo_103 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Energy Absorption", cost: [], damage: "", text: "Search your discard pile for an Energy card and attached it to Mewtwo Star." },
      { name: "Psychic Star", cost: [], damage: "50+", text: "If the Defending Pokémon is an Evolved Pokémon, discard all Energy attached to Mewtwo Star and this attack does 50 damage plus 50 more damage." }
  ];
  public set: string = "HP";
  public name: string = "Mewtwo ★";
  public fullName: string = "Mewtwo ★ HP 103";
  public text: string = "Mewtwo ★";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 99);
    }
    return state;
  }
}
