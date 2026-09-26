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

export class GiovanniSMachamp_6 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Giovanni's Machoke";
  public hp: number = 100;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Fortitude", powerType: PowerType.ABILITY, text: "If Giovanni's Machamp would be Knocked Out by an opponent's attack, flip a coin. If heads, Giovanni's Machamp is not Knocked Out and its remaining HP become 10 instead. This power can't be used if Giovanni's Machamp is already Asleep, Confused, or Paralyzed.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hurricane Punch", cost: [], damage: "30×", text: "Flip 4 coins. This attack does 30 damage times the number of heads." }
  ];
  public set: string = "G2";
  public name: string = "Giovanni's Machamp";
  public fullName: string = "Giovanni's Machamp G2 6";
  public text: string = "Giovanni's Machamp";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 4, 30);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
