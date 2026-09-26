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

export class AegislashEX_65a extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 170;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Mighty Shield", powerType: PowerType.ABILITY, text: "Prevent all damage done to this Pokémon by attacks from each of your opponent's Pokémon that has Special Energy attached to it.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Slash Blast", cost: [], damage: "40+", text: "This attack does 20 more damage for each Metal Energy attached to this Pokémon." }
  ];
  public set: string = "PHF";
  public name: string = "Aegislash-EX";
  public fullName: string = "Aegislash-EX PHF 65a";
  public text: string = "Aegislash-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "auraPreventEffects");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "auraPreventEffects");
    }
    return state;
  }
}
