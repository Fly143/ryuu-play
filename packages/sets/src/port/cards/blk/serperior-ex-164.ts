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

export class SerperiorEx_164 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Servine";
  public hp: number = 320;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Regal Cheer", powerType: PowerType.ABILITY, text: "Attacks used by your Pokémon do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Command the Grass", cost: [], damage: "150", text: "You may search your deck for up to 3 cards and put them into your hand. Then, shuffle your deck." }
  ];
  public set: string = "BLK";
  public name: string = "Serperior ex";
  public fullName: string = "Serperior ex BLK 164";
  public text: string = "Serperior ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchAnyToHand:3");
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "auraPlusDamage:20");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "auraPlusDamage:20");
    }
    return state;
  }
}
