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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Gorebyss_52 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Clamperl";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "α Growth", powerType: PowerType.ABILITY, text: "When you attach an Energy card from your hand to this Pokémon (except with an attack, Ability, or Trainer card), you may attach 2 Energy cards.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Psy Bolt", cost: [], damage: "30", text: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed." }
  ];
  public set: string = "ROS";
  public name: string = "Gorebyss";
  public fullName: string = "Gorebyss ROS 52";
  public text: string = "Gorebyss";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.PARALYZED);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "attachBasicFromHandToBench:2");
    }
    return state;
  }
}
