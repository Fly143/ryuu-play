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

export class UnownB_66 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "BOUNCE", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if Unown B is on your Bench, you may flip a coin. If heads, discard all cards attached to any 1 of your Unown and shuffle that Pokémon back into your deck.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hidden Power", cost: [], damage: "10", text: "" }
  ];
  public set: string = "DP";
  public name: string = "Unown [B]";
  public fullName: string = "Unown [B] DP 66";
  public text: string = "Unown [B]";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "flipHeadsDraw:1");
    }
    return state;
  }
}
