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

export class TeamAquaSLanturn_28 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Team Aqua's Chinchou";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Auxiliary Light", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may attach a basic Energy card from your hand to Team Aqua's Lanturn. Put 2 damage counters on Team Aqua's Lanturn. This power can't be used if Team Aqua's Lanturn is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Lightning Ball", cost: [], damage: "50", text: "" }
  ];
  public set: string = "MA";
  public name: string = "Team Aqua's Lanturn";
  public fullName: string = "Team Aqua's Lanturn MA 28";
  public text: string = "Team Aqua's Lanturn";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "oncePerTurnAttachFromHand");
    }
    return state;
  }
}
