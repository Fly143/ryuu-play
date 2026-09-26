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

export class Aurorus_92 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Amaura";
  public hp: number = 170;
    public height?: number = 2.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Tundra Wall", powerType: PowerType.ABILITY, text: "All of your Pokémon that have any Water Energy attached take 50 less damage from attacks from your opponent's Pokémon (after applying Weakness and Resistance). The effect of Tundra Wall doesn't stack.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Freezing Chill", cost: [], damage: "150", text: "During your opponent's next turn, the Defending Pokémon can't use attacks." }
  ];
  public set: string = "POR";
  public name: string = "Aurorus";
  public fullName: string = "Aurorus POR 92";
  public text: string = "Aurorus";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantAttackOpponentNextTurn(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.reduceDamageSelfPower(this, store, state, effect).reduce(effect.power, 50);
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "reduceDamageSelf:50");
    }
    return state;
  }
}
