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

export class Azumarill_104 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Marill";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "α Recovery", powerType: PowerType.ABILITY, text: "When this Pokémon is healed, double the amount healed.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Tail Rap", cost: [], damage: "30×", text: "Flip 2 coins. This attack does 30 damage times the number of heads." },
      { name: "Dwindling Wave", cost: [], damage: "100-", text: "This attack does 100 damage minus 10 damage for each damage counter on this Pokémon." }
  ];
  public set: string = "ROS";
  public name: string = "Azumarill";
  public fullName: string = "Azumarill ROS 104";
  public text: string = "Azumarill";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 2, 30);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 10, Math.floor(effect.player.active.damage / 10));
    }
    return state;
  }
}
