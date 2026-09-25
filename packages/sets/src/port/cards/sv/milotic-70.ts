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

export class Milotic_70 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Feebas";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Cleansing Ring", cost: [], damage: "20", text: "You may discard 2 cards from your hand. If you do, remove 4 damage counters from 1 of your Pokémon." },
      { name: "Scale Blow", cost: [], damage: "90-", text: "Does 90 damage minus 10 damage for each card in your hand." }
  ];
  public set: string = "SV";
  public name: string = "Milotic";
  public fullName: string = "Milotic SV 70";
  public text: string = "Milotic";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 40);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "minusPerHand:10");
    }
    return state;
  }
}
