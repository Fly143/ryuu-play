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

export class SabrinaSHaunter_55 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Sabrina's Gastly";
  public hp: number = 70;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Nightmare", cost: [], damage: "20", text: "The Defending Pokémon is now Asleep." },
      { name: "Shadow Attack", cost: [], damage: "", text: "Flip a coin. If heads, and if your opponent has any Benched Pokémon, choose 1 of them and this attack does 30 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "G2";
  public name: string = "Sabrina's Haunter";
  public fullName: string = "Sabrina's Haunter G2 55";
  public text: string = "Sabrina's Haunter";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
