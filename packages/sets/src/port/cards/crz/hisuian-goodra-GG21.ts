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

export class HisuianGoodraGG21 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Hisuian Sliggoo";
  public hp: number = 160;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Metal Lodging", powerType: PowerType.ABILITY, text: "Prevent all damage done to each of your Basic Pokémon that has any Metal Energy attached by attacks from your opponent's Pokémon V.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Heavy Impact", cost: [], damage: "140", text: "" }
  ];
  public set: string = "CRZ";
  public name: string = "Hisuian Goodra";
  public fullName: string = "Hisuian Goodra CRZ GG21";
  public text: string = "Hisuian Goodra";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "auraPreventEffects");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "auraPreventEffects");
    }
    return state;
  }
}
