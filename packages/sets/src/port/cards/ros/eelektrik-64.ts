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

export class Eelektrik_64 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Tynamo";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "α Recovery", powerType: PowerType.ABILITY, text: "When this Pokémon is healed, double the amount healed.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Thrash", cost: [], damage: "50+", text: "Flip a coin. If heads, this attack does 20 more damage. If tails, this Pokémon does 20 damage to itself." }
  ];
  public set: string = "ROS";
  public name: string = "Eelektrik";
  public fullName: string = "Eelektrik ROS 64";
  public text: string = "Eelektrik";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 20, 1);
    }
    return state;
  }
}
