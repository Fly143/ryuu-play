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
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Solrock_25 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Luna Shade", powerType: PowerType.ABILITY, text: "As long as you have Lunatone in play, each player's Colorless Pokémon (excluding Pokémon-ex) can't use any Poké-Powers.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Call for Family", cost: [], damage: "", text: "Search your deck for a Lunatone and put it onto your Bench. Shuffle your deck afterward." },
      { name: "Hyper Beam", cost: [], damage: "", text: "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon." }
  ];
  public set: string = "LM";
  public name: string = "Solrock";
  public fullName: string = "Solrock LM 25";
  public text: string = "Solrock";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.searchBasicToBench(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergyDefending(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "noPowers");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "noPowers");
    }
    return state;
  }
}
