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

export class Regigigas_9 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Regi Form", powerType: PowerType.ABILITY, text: "If you have Regirock, Regice, and Registeel in play, the attack cost of Regigigas's attacks is Colorless less.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Mega Punch", cost: [], damage: "30", text: "" },
      { name: "Giga Power", cost: [], damage: "60+", text: "You may do 60 damage plus 40 more damage. If you do, Regigigas does 40 damage to itself." }
  ];
  public set: string = "PL";
  public name: string = "Regigigas";
  public fullName: string = "Regigigas PL 9";
  public text: string = "Regigigas";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, -40, 1);
    }
    return state;
  }
}
