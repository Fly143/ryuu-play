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

export class WormadamTrashCloak_43 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Burmy Trash Cloak";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Trash Cloak", powerType: PowerType.ABILITY, text: "If Wormadam Trash Cloak has a Pokémon Tool card attached to it, any damage done to Wormadam Trash Cloak by attacks is reduced by 20 (after applying Weakness and Resistance).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Iron Tackle", cost: [], damage: "70", text: "Wormadam Trash Cloak does 20 damage to itself." }
  ];
  public set: string = "SW";
  public name: string = "Wormadam Trash Cloak";
  public fullName: string = "Wormadam Trash Cloak SW 43";
  public text: string = "Wormadam Trash Cloak";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.reduceDamageSelfPower(this, store, state, effect).reduce(effect.power, 20);
    }
    return state;
  }
}
