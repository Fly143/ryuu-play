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

export class RocketSSuicuneEx_105 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dark and Clear", powerType: PowerType.ABILITY, text: "As long as Rocket's Suicune ex has any Darkness Energy attached to it, Rocket's Suicune ex can't be affected by any Special Conditions.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Icy Wind", cost: [], damage: "10", text: "The Defending Pokémon is now Asleep." },
      { name: "Hyper Splash", cost: [], damage: "50+", text: "If the Defending Pokémon is a Stage 2 Evolved Pokémon, this attack does 50 damage plus 40 more damage." }
  ];
  public set: string = "TRR";
  public name: string = "Rocket's Suicune ex";
  public fullName: string = "Rocket's Suicune ex TRR 105";
  public text: string = "Rocket's Suicune ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "immuneToSpecial");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "immuneToSpecial");
    }
    return state;
  }
}
