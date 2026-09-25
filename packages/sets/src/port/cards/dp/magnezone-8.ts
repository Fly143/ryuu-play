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

export class Magnezone_8 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Magneton";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Magnetize", powerType: PowerType.ABILITY, text: "If you have any Metal Energy attached to your Active Pokémon, the Retreat Cost for that Pokémon is 0.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Metal Blast", cost: [], damage: "50+", text: "Does 50 damage plus 10 more damage for each Metal Energy attached to Magnezone." }
  ];
  public set: string = "DP";
  public name: string = "Magnezone";
  public fullName: string = "Magnezone DP 8";
  public text: string = "Magnezone";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
