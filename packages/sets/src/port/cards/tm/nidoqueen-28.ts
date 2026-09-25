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

export class Nidoqueen_28 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Nidorina";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Return", cost: [], damage: "30", text: "Draw cards until you have 6 cards in your hand." },
      { name: "Prize Count", cost: [], damage: "50+", text: "If you have more Prize cards left than your opponent, this attack does 50 damage plus 30 more damage." }
  ];
  public set: string = "TM";
  public name: string = "Nidoqueen";
  public fullName: string = "Nidoqueen TM 28";
  public text: string = "Nidoqueen";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "drawUntilHand:6");
    }
    return state;
  }
}
