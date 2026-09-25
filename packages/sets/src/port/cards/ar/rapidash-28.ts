import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
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

export class Rapidash_28 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Ponyta";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Wild Guard", powerType: PowerType.ABILITY, text: "Prevent all effects of attacks, including damage, done to Rapidash by your opponent's Pokémon SP.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Fire Mane", cost: [], damage: "20", text: "" },
      { name: "Rising Lunge", cost: [], damage: "50+", text: "Flip a coin. If heads, this attack does 50 damage plus 20 more damage." }
  ];
  public set: string = "AR";
  public name: string = "Rapidash";
  public fullName: string = "Rapidash AR 28";
  public text: string = "Rapidash";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.preventEffectsSelfPower(this, store, state, effect).reduce(effect.power);
    }
    return state;
  }
}
