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

export class Klinklang_76 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Klang";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Shift Gear", powerType: PowerType.ABILITY, text: "As often as you like during your turn (before your attack), you may move a Metal Energy attached to 1 of your Pokémon to another of your Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Gear Grind", cost: [], damage: "80×", text: "Flip 2 coins. This attack does 80 damage times the number of heads." }
  ];
  public set: string = "BW";
  public name: string = "Klinklang";
  public fullName: string = "Klinklang BW 76";
  public text: string = "Klinklang";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 2, 80);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "oncePerTurnAttachFromHand");
    }
    return state;
  }
}
