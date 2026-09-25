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

export class Leavanny_12 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Swadloon";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Leaf Tailor", powerType: PowerType.ABILITY, text: "Each of your Pokémon that has any Energy attached to it has no Weakness.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Cutting Arm", cost: [], damage: "40+", text: "Flip 2 coins. This attack does 20 more damage for each heads." }
  ];
  public set: string = "PHF";
  public name: string = "Leavanny";
  public fullName: string = "Leavanny PHF 12";
  public text: string = "Leavanny";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 20, 0);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
