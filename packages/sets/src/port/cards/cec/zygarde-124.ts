import {
  Effect,
  State,
  StoreLike,
  PowerEffect,
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

export class Zygarde_124 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Cellular Companions", powerType: PowerType.ABILITY, text: "As long as this Pokémon is on your Bench, your Zygarde's and Zygarde-GX's attacks do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Boost Fang", cost: [], damage: "20", text: "Attach a Fighting Energy card from your discard pile to 1 of your Benched Pokémon." }
  ];
  public set: string = "CEC";
  public name: string = "Zygarde";
  public fullName: string = "Zygarde CEC 124";
  public text: string = "Zygarde";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "plusPowerMarker:20");
    }
    return state;
  }
}
