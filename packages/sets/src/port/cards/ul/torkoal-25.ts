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

export class Torkoal_25 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Hot Snort", powerType: PowerType.ABILITY, text: "Once during your turn, when you put Torkoal from your hand onto your Bench, you may flip a coin. If heads, the Defending Pokémon is now Burned.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Flare", cost: [], damage: "30", text: "" }
  ];
  public set: string = "UL";
  public name: string = "Torkoal";
  public fullName: string = "Torkoal UL 25";
  public text: string = "Torkoal";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "flipHeadsDraw:1");
    }
    return state;
  }
}
