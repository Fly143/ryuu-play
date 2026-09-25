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

export class WormadamPlantCloak_49 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Burmy Plant Cloak";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Magical Needle", cost: [], damage: "20", text: "Remove 2 damage counters from 1 of your Benched Pokémon." },
      { name: "Cloak Scale", cost: [], damage: "50", text: "If you have Wormadam Sandy Cloak in play, the Defending Pokémon is now Burned, Confused, and Poisoned." }
  ];
  public set: string = "AR";
  public name: string = "Wormadam Plant Cloak";
  public fullName: string = "Wormadam Plant Cloak AR 49";
  public text: string = "Wormadam Plant Cloak";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
