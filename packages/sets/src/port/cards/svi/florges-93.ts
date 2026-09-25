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

export class Florges_93 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Floette";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Blooming Garden", powerType: PowerType.ABILITY, text: "Your Pokémon in play have no Weakness.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Moonblast", cost: [], damage: "120", text: "During your opponent's next turn, the Defending Pokémon's attacks do 30 less damage (before applying Weakness and Resistance)." }
  ];
  public set: string = "SVI";
  public name: string = "Florges";
  public fullName: string = "Florges SVI 93";
  public text: string = "Florges";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "noWeakness");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "noWeakness");
    }
    return state;
  }
}
