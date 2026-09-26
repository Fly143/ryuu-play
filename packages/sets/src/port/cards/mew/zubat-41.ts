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

export class Zubat_41 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Revealing Echo", powerType: PowerType.ABILITY, text: "Once during your turn, if this Pokémon is in the Active Spot, you may have your opponent reveal their hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Bite", cost: [], damage: "10", text: "" }
  ];
  public set: string = "MEW";
  public name: string = "Zubat";
  public fullName: string = "Zubat MEW 41";
  public text: string = "Zubat";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "peekOpponentHand");
    }
    return state;
  }
}
