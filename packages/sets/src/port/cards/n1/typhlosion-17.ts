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

export class Typhlosion_172 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Quilava";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Fire Recharge", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may flip a coin. If heads, attach a Fire Energy card from your discard pile to 1 of your Fire Pokémon. This power can't be used if Typhlosion is Asleep, Confused, or Paralyzed.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Flame Burst", cost: [], damage: "60+", text: "Flip a coin. If heads, this attack does 60 damage plus 20 more damage and does 20 damage to Typhlosion. If tails, this attack does 60 damage." }
  ];
  public set: string = "N1";
  public name: string = "Typhlosion";
  public fullName: string = "Typhlosion N1 17";
  public text: string = "Typhlosion";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "attachBasicFromDiscard");
    }
    return state;
  }
}
