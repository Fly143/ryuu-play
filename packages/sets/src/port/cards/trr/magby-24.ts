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

export class Magby_24 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Baby Evolution", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may put Magmar from your hand onto Magby (this counts as evolving Magby), and remove all damage counters from Magby.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Detour", cost: [], damage: "", text: "If you have a Supporter card in play, use the effect on that card as the effect of this attack." }
  ];
  public set: string = "TRR";
  public name: string = "Magby";
  public fullName: string = "Magby TRR 24";
  public text: string = "Magby";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "searchBasicToBench:1");
    }
    return state;
  }
}
