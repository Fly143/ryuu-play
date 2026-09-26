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

export class Combusken_28 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Torchic";
  public hp: number = 80;
    public height?: number = 0.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Natural Cure", powerType: PowerType.ABILITY, text: "When you attach a Fire Energy card from your hand to Combusken, remove all Special Conditions from Combusken.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Lunge", cost: [], damage: "50", text: "Flip a coin. If tails, this attack does nothing." }
  ];
  public set: string = "RS";
  public name: string = "Combusken";
  public fullName: string = "Combusken RS 28";
  public text: string = "Combusken";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "flipTailsBaseDamage:0");
    }
    return state;
  }
}
