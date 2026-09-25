import {
  Effect,
  State,
  StoreLike,
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

export class Azelf_4 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Downer Material", powerType: PowerType.ABILITY, text: "If you have Uxie and Mesprit in play, the attack cost of each of your opponent's Basic Pokémon's attacks is Colorless more. You can't use more than 1 Downer Material Poké-Body each turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Bind Pulse", cost: [], damage: "10", text: "During your opponent's next turn, your opponent can't attach any Special Energy cards from his or her hand to any of his or her Pokémon." }
  ];
  public set: string = "MT";
  public name: string = "Azelf";
  public fullName: string = "Azelf MT 4";
  public text: string = "Azelf";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "moreAttackCostOpponent");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "moreAttackCostOpponent");
    }
    return state;
  }
}
