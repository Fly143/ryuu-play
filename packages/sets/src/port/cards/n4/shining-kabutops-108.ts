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

export class ShiningKabutops_108 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Lightning Cut", cost: [], damage: "30+", text: "Flip a coin. If heads, this attack does 30 damage plus 10 more damage and does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) If tails, this attack does 30 damage and Shining Kabutops does 10 damage to itself." },
      { name: "Water Slash", cost: [], damage: "50+", text: "Does 50 damage plus 10 more damage for each Water Energy attached to Shining Kabutops but not used to pay for this attack's Energy cost. Don't apply Resistance." }
  ];
  public set: string = "N4";
  public name: string = "Shining Kabutops";
  public fullName: string = "Shining Kabutops N4 108";
  public text: string = "Shining Kabutops";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
