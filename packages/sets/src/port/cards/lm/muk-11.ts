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

export class Muk_11 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Grimer";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Stench", powerType: PowerType.ABILITY, text: "As long as Muk is your Active Pokémon, each player's Pokémon can't use any Poké-Powers.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Poison Ring", cost: [], damage: "20", text: "The Defending Pokémon is now Poisoned. The Defending Pokémon can't retreat during your opponent's next turn." },
      { name: "Sludge Toss", cost: [], damage: "50", text: "" }
  ];
  public set: string = "LM";
  public name: string = "Muk";
  public fullName: string = "Muk LM 11";
  public text: string = "Muk";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
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
