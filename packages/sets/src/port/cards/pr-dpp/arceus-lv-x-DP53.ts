import {
  Effect,
  State,
  StoreLike,
  PowerEffect,
  BetweenTurnsEffect,
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

export class ArceusLVXDP53 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Arceus";
  public hp: number = 120;
    public height?: number = 3.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Multitype", powerType: PowerType.ABILITY, text: "Arceus LV. X's type is the same type as its previous Level.", useWhenInPlay: true },
      { name: "Omniscient", powerType: PowerType.ABILITY, text: "Arceus can use the attacks of all Arceus you have in play as its own. (You still need the necessary Energy to use each attack.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [];
  public set: string = "PR-DPP";
  public name: string = "Arceus LV.X";
  public fullName: string = "Arceus LV.X PR-DPP DP53";
  public text: string = "Arceus LV.X";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "dualType");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "dualType");
    }
    return state;
  }
}
