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

export class MedichamEx_95 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Meditite";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Wise Aura", powerType: PowerType.ABILITY, text: "As long as Medicham ex is your Active Pokémon, each Pokémon (excluding Pokémon-ex) (both yours and your opponent's) can't use any Poké-Powers.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Pure Power", cost: [], damage: "", text: "Put 3 damage counters on your opponent's Pokémon in any way you like." },
      { name: "Sky Kick", cost: [], damage: "60+", text: "If the Defending Pokémon has Fighting Resistance, this attack does 60 damage plus 40 more damage." }
  ];
  public set: string = "EM";
  public name: string = "Medicham ex";
  public fullName: string = "Medicham ex EM 95";
  public text: string = "Medicham ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.putCountersDefending(this, store, state, effect).use(effect, 30);
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
