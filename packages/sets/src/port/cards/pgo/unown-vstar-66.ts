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

export class UnownVSTAR_66 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Unown V";
  public hp: number = 250;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Tri Power", cost: [], damage: "70×", text: "Flip 3 coins. This attack does 70 damage for each heads." },
      { name: "Star Cipher", cost: [], damage: "", text: "Until this Pokémon leaves play, it gains an Ability that has the effect \"The Weakness of each of your opponent's Pokémon in play is now Psychic. (The amount of Weakness doesn't change.)\" (You can't use more than 1 VSTAR Power in a game.)" }
  ];
  public set: string = "PGO";
  public name: string = "Unown VSTAR";
  public fullName: string = "Unown VSTAR PGO 66";
  public text: string = "Unown VSTAR";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 3, 70);
    }
    return state;
  }
}
