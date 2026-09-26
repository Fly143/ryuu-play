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

export class Chansey_113 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Lucky Bonus", powerType: PowerType.ABILITY, text: "If you took this Pokémon as a face-down Prize card during your turn and your Bench isn't full, before you put it into your hand, you may put it onto your Bench. If you put this Pokémon onto your Bench in this way, flip a coin. If heads, take 1 more Prize card.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Gentle Slap", cost: [], damage: "70", text: "" }
  ];
  public set: string = "MEW";
  public name: string = "Chansey";
  public fullName: string = "Chansey MEW 113";
  public text: string = "Chansey";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "plusPrize:1");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "plusPrize:1");
    }
    return state;
  }
}
