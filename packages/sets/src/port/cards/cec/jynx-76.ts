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

export class Jynx_76 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Ominous Posture", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon to another of your Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Attract Smack", cost: [], damage: "30", text: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed." }
  ];
  public set: string = "CEC";
  public name: string = "Jynx";
  public fullName: string = "Jynx CEC 76";
  public text: string = "Jynx";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.PARALYZED);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "moveDamageCounters");
    }
    return state;
  }
}
