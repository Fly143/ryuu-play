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

export class MrMime_29 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Trick Reveal", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may have both you and your opponent reveal your hands. This power can't be used if Mr. Mime is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Juggling", cost: [], damage: "10×", text: "Flip 4 coins. This attack does 10 damage times the number of heads." }
  ];
  public set: string = "CL";
  public name: string = "Mr. Mime";
  public fullName: string = "Mr. Mime CL 29";
  public text: string = "Mr. Mime";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 4, 10);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "peekOpponentHand");
    }
    return state;
  }
}
