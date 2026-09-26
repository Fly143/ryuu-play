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

export class SuicuneH25 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Pure Body", powerType: PowerType.ABILITY, text: "To attach a Water Energy card from your hand to Suicune, you must discard an Energy card attached to Suicune. (Attach the Water Energy, and then discard an Energy card from Suicune.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hypno Wave", cost: [], damage: "30+", text: "Flip a coin. If heads, this attack does 30 damage plus 20 more damage. If tails, this attack does 30 damage and the Defending Pokémon is now Asleep." }
  ];
  public set: string = "AQ";
  public name: string = "Suicune";
  public fullName: string = "Suicune AQ H25";
  public text: string = "Suicune";

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
