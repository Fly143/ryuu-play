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

export class HydreigonEx_169 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Zweilous";
  public hp: number = 330;
    public height?: number = 1.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Greedy Eater", powerType: PowerType.ABILITY, text: "If your opponent's Basic Pokémon is Knocked Out by damage from an attack used by this Pokémon, take 1 more Prize card.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Dark Bite", cost: [], damage: "200", text: "During your opponent's next turn, the Defending Pokémon can't retreat." }
  ];
  public set: string = "WHT";
  public name: string = "Hydreigon ex";
  public fullName: string = "Hydreigon ex WHT 169";
  public text: string = "Hydreigon ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "plusPrize:1");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "plusPrize:1");
    }
    return state;
  }
}
