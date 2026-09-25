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

export class Celebi_19 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Time Distortion", cost: [], damage: "", text: "Devolve any number of your Benched Pokémon as many times as you like. Put each Evolution card removed this way into your hand." },
      { name: "Leech Seed", cost: [], damage: "20", text: "Heal 20 damage from this Pokémon." }
  ];
  public set: string = "DRM";
  public name: string = "Celebi ◇";
  public fullName: string = "Celebi ◇ DRM 19";
  public text: string = "Celebi ◇";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "devolve");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
