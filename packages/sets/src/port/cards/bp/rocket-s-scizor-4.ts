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

export class RocketSScizor_4 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Focus", cost: [], damage: "", text: "During your next turn, Rocket's Scizor's Agility attack's damage is doubled." },
      { name: "Agility", cost: [], damage: "20", text: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Rocket's Scizor." }
  ];
  public set: string = "BP";
  public name: string = "Rocket's Scizor";
  public fullName: string = "Rocket's Scizor BP 4";
  public text: string = "Rocket's Scizor";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "bonusNamedAttack:40");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.preventDamageNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
