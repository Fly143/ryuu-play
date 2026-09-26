import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class VileplumeEx_100 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Gloom";
  public hp: number = 140;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Block Dust", powerType: PowerType.ABILITY, text: "As long as Vileplume ex is your Active Pokémon, your opponent can't play any Trainer cards (except for Supporter cards) from his or her hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Special Formula", cost: [], damage: "50", text: "Flip a coin. If heads, the Defending Pokémon is now Asleep and Poisoned. If tails, the Defending Pokémon is now Confused." }
  ];
  public set: string = "HL";
  public name: string = "Vileplume ex";
  public fullName: string = "Vileplume ex HL 100";
  public text: string = "Vileplume ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "noTrainers");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "noTrainers");
    }
    return state;
  }
}
