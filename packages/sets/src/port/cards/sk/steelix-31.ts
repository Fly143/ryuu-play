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

export class Steelix_31 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Onix";
  public hp: number = 100;
    public height?: number = 9.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Rare Metal", powerType: PowerType.ABILITY, text: "All basic Energy cards attached to Steelix provide Metal Energy instead of their usual types.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Squeeze", cost: [], damage: "20+", text: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage and the Defending Pokémon is now Paralyzed." },
      { name: "Metal Tail", cost: [], damage: "40", text: "Before doing damage, you may flip a coin. If heads, this attack does 80 damage. If tails, this attack does nothing." }
  ];
  public set: string = "SK";
  public name: string = "Steelix";
  public fullName: string = "Steelix SK 31";
  public text: string = "Steelix";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 80);
    }
    return state;
  }
}
