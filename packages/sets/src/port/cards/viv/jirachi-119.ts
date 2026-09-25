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

export class Jirachi_119 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dreamy Revelation", powerType: PowerType.ABILITY, text: "Once during your turn, if this Pokémon is in the Active Spot, you may look at the top 2 cards of your deck and put 1 of them into your hand. Put the other card back on top of your deck.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Amazing Star", cost: [], damage: "", text: "Search your deck for up to 7 basic Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck." }
  ];
  public set: string = "VIV";
  public name: string = "Jirachi";
  public fullName: string = "Jirachi VIV 119";
  public text: string = "Jirachi";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "pokedex");
    }
    return state;
  }
}
