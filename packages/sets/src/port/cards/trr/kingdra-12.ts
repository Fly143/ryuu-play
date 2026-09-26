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

export class Kingdra_12 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Seadra";
  public hp: number = 120;
    public height?: number = 1.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dragon Veil", powerType: PowerType.ABILITY, text: "As long as Kingdra is in play, each of your Active Pokémon has no Weakness.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hyper Whirlpool", cost: [], damage: "20", text: "Flip a coin until you get tails. For each heads, discard an Energy card attached to the Defending Pokémon." },
      { name: "Aqua Sonic", cost: [], damage: "50", text: "This attack's damage is not affected by Resistance." }
  ];
  public set: string = "TRR";
  public name: string = "Kingdra";
  public fullName: string = "Kingdra TRR 12";
  public text: string = "Kingdra";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergyDefending(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "noWeakness");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "noWeakness");
    }
    return state;
  }
}
