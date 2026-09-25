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

export class CrobatH5 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Golbat";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Carry Off", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may flip a coin. If heads, look at your opponent's hand. If your opponent has any Baby Pokémon, Basic Pokémon, or Evolution cards there, choose 1 of them. Your opponent shuffles that card into his or her deck. This power can't be used if Crobat is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Double Cross", cost: [], damage: "40×", text: "Flip 2 coins. This attack does 40 damage times the number of heads. If both of them are tails, the Defending Pokémon is now Confused and Poisoned." }
  ];
  public set: string = "SK";
  public name: string = "Crobat";
  public fullName: string = "Crobat SK H5";
  public text: string = "Crobat";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 2, 40);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "peekOpponentHand");
    }
    return state;
  }
}
