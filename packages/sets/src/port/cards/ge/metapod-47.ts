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

export class Metapod_47 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Caterpie";
  public hp: number = 70;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Emerge", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if Metapod is your Active Pokémon, you may flip a coin. If heads, search your deck for a card that evolves from Metapod and put it onto Metapod. (This counts as evolving Metapod.) Shuffle your deck afterward. This power can't be used if Metapod is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Ram", cost: [], damage: "30", text: "" }
  ];
  public set: string = "GE";
  public name: string = "Metapod";
  public fullName: string = "Metapod GE 47";
  public text: string = "Metapod";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "flipHeadsDraw:1");
    }
    return state;
  }
}
