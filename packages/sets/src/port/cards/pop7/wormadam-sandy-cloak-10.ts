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

export class WormadamSandyCloak_10 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Burmy Sandy Cloak";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sandy Cloak", powerType: PowerType.ABILITY, text: "Prevent all effects, excluding damage, done to Wormadam Sandy Cloak.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Push Over", cost: [], damage: "40+", text: "Does 40 damage plus 10 more damage for each Fighting Energy attached to Wormadam Sandy Cloak." }
  ];
  public set: string = "POP7";
  public name: string = "Wormadam Sandy Cloak";
  public fullName: string = "Wormadam Sandy Cloak POP7 10";
  public text: string = "Wormadam Sandy Cloak";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
