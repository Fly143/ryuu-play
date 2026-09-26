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

export class Annihilape_109 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Primeape";
  public hp: number = 140;
    public height?: number = 0.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rage Fist", cost: [], damage: "70×", text: "This attack does 70 damage for each Prize card your opponent has taken." },
      { name: "Dynamite Punch", cost: [], damage: "170", text: "This Pokémon also does 50 damage to itself." }
  ];
  public set: string = "SVI";
  public name: string = "Annihilape";
  public fullName: string = "Annihilape SVI 109";
  public text: string = "Annihilape";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 50);
    }
    return state;
  }
}
