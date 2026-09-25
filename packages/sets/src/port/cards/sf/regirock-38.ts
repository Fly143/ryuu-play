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

export class Regirock_38 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Regi Cycle", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if you have a Fighting Energy card in your discard pile, you may discard 2 cards from your hand. Then, attach a Fighting Energy card from your discard pile to Regirock. This power can't be used if Regirock is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Stone Edge", cost: [], damage: "40+", text: "Flip a coin. If heads, this attack does 40 damage plus 30 more damage." }
  ];
  public set: string = "SF";
  public name: string = "Regirock";
  public fullName: string = "Regirock SF 38";
  public text: string = "Regirock";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "searchAnyToHand:1");
    }
    return state;
  }
}
