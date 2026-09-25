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

export class Snorlax_101 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Block", powerType: PowerType.ABILITY, text: "As long as this Pokémon is your Active Pokémon, your opponent's Active Pokémon can't retreat.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Teampact", cost: [], damage: "30×", text: "Does 30 damage times the number of Team Plasma Pokémon you have in play." }
  ];
  public set: string = "PLB";
  public name: string = "Snorlax";
  public fullName: string = "Snorlax PLB 101";
  public text: string = "Snorlax";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageTimesPokemonInPlay(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "auraCantRetreatOpponent");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "auraCantRetreatOpponent");
    }
    return state;
  }
}
