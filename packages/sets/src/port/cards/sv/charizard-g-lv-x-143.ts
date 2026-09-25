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

export class CharizardGLVX_143 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Charizard G";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Call for Power", powerType: PowerType.ABILITY, text: "As often as you like during your turn (before your attack), you may move an Energy attached to 1 of your Pokémon to Charizard G. This power can't be used if Charizard G is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Malevolent Fire", cost: [], damage: "150", text: "Flip a coin. If tails, discard all Energy attached to Charizard G." }
  ];
  public set: string = "SV";
  public name: string = "Charizard G LV.X";
  public fullName: string = "Charizard G LV.X SV 143";
  public text: string = "Charizard G LV.X";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 99);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "oncePerTurnAttachFromHand");
    }
    return state;
  }
}
