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

export class RegigigasXY82 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Earthen Awakening", powerType: PowerType.ABILITY, text: "Whenever you attach an Energy card from your hand to this Pokémon, heal 20 damage from it.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Gigas Punch", cost: [], damage: "100", text: "Flip 2 coins. If both of them are tails, this attack does nothing." }
  ];
  public set: string = "PR-XY";
  public name: string = "Regigigas";
  public fullName: string = "Regigigas PR-XY XY82";
  public text: string = "Regigigas";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "attackGate");
    }
    return state;
  }
}
