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

export class SimisearVSTARGG37 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Simisear V";
  public hp: number = 260;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Fireball Fever", cost: [], damage: "40+", text: "You may discard up to 5 cards from the top of your deck. This attack does 40 more damage for each card you discarded in this way." },
      { name: "Ember Star", cost: [], damage: "30×", text: "This attack does 30 damage for each Energy card in your discard pile. (You can't use more than 1 VSTAR Power in a game.)" }
  ];
  public set: string = "CRZ";
  public name: string = "Simisear VSTAR";
  public fullName: string = "Simisear VSTAR CRZ GG37";
  public text: string = "Simisear VSTAR";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 40, 0);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "damageTimesDiscardPokemon:30");
    }
    return state;
  }
}
