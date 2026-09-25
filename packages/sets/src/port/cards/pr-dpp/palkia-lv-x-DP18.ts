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

export class PalkiaLVXDP18 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Palkia";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Restructure", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may have your opponent switch 1 of your Active Pokémon with 1 of your Benched Pokémon. Then, you switch 1 of the Defending Pokémon with 1 of your opponent's Benched Pokémon. This power can't be used if Palkia is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hydro Reflect", cost: [], damage: "60", text: "You may move all Energy cards attached to Palkia to your Benched Pokémon in any way you like. (Ignore this effect if you don't have any Benched Pokémon.)" }
  ];
  public set: string = "PR-DPP";
  public name: string = "Palkia LV.X";
  public fullName: string = "Palkia LV.X PR-DPP DP18";
  public text: string = "Palkia LV.X";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.switchSelfPower(this, store, state, effect).reduce(effect.power);
    }
    return state;
  }
}
