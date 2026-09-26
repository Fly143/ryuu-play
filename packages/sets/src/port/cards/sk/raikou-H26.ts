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

export class RaikouH26 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 1.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Pure Body", powerType: PowerType.ABILITY, text: "To attach a Lightning Energy card from your hand to Raikou, you must discard an Energy card attached to Raikou. (Attach the Lightning Energy, and then discard an Energy card from Raikou.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Lightning Sphere", cost: [], damage: "40+", text: "You may flip a coin. If heads, discard all Lightning Energy cards attached to Raikou. This attack does 40 damage plus 20 more damage for each Energy card discarded in this way." }
  ];
  public set: string = "SK";
  public name: string = "Raikou";
  public fullName: string = "Raikou SK H26";
  public text: string = "Raikou";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "attachCostDiscardEnergy");
    }
    return state;
  }
}
