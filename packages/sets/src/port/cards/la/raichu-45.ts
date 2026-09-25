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

export class Raichu_45 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Pikachu";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Agility", cost: [], damage: "20", text: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Raichu during your opponent's next turn." },
      { name: "Thunderbolt", cost: [], damage: "100", text: "Discard all Energy cards attached to Raichu." }
  ];
  public set: string = "LA";
  public name: string = "Raichu";
  public fullName: string = "Raichu LA 45";
  public text: string = "Raichu";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "preventEffectsMarker");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 99);
    }
    return state;
  }
}
