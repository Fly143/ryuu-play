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

export class Kecleon_67 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Colorful Body", powerType: PowerType.ABILITY, text: "Kecleon's type is Grass Fire Water Lightning Psychic Fighting Darkness Metal Colorless.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Triple Smash", cost: [], damage: "10+", text: "Flip 3 coins. This attack does 10 damage plus 20 more damage for each heads." }
  ];
  public set: string = "RR";
  public name: string = "Kecleon";
  public fullName: string = "Kecleon RR 67";
  public text: string = "Kecleon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
