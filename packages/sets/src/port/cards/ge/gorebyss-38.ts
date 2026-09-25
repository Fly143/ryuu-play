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
import { commonEffects } from '../../../common';

export class Gorebyss_38 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Clamperl";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Sweet Temptation", cost: [], damage: "", text: "Switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. This attack does 10 damage to the new Defending Pokémon." },
      { name: "Psychic Snap", cost: [], damage: "30+", text: "If Gorebyss has any Psychic Energy attached to it, this attack does 30 damage plus 20 more damage and the Defending Pokémon is now Confused." }
  ];
  public set: string = "GE";
  public name: string = "Gorebyss";
  public fullName: string = "Gorebyss GE 38";
  public text: string = "Gorebyss";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.gustOpponent(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    return state;
  }
}
