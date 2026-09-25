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

export class Hydreigon_140 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Zweilous";
  public hp: number = 180;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Tri Howl", powerType: PowerType.ABILITY, text: "Once during your turn, you may look at the top 3 cards of your deck and attach any number of Energy cards you find there to your Pokémon in any way you like. Discard the other cards.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Dark Cutter", cost: [], damage: "160", text: "" }
  ];
  public set: string = "PAL";
  public name: string = "Hydreigon";
  public fullName: string = "Hydreigon PAL 140";
  public text: string = "Hydreigon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "pokedex");
    }
    return state;
  }
}
