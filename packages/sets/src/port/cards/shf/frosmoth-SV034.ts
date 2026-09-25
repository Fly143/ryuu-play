import {
  Effect,
  State,
  StoreLike,
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

export class FrosmothSV034 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Snom";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Ice Dance", powerType: PowerType.ABILITY, text: "As often as you like during your turn, you may attach a Water Energy card from your hand to 1 of your Benched Water Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Aurora Beam", cost: [], damage: "30", text: "" }
  ];
  public set: string = "SHF";
  public name: string = "Frosmoth";
  public fullName: string = "Frosmoth SHF SV034";
  public text: string = "Frosmoth";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "oncePerTurnAttachFromHand");
    }
    return state;
  }
}
