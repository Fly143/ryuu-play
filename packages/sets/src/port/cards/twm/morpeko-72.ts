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

export class Morpeko_72 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Snack Seek", powerType: PowerType.ABILITY, text: "Once during your turn, you may look at the top card of your deck. You may discard that card.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Pick and Stick", cost: [], damage: "", text: "Attach up to 2 Basic Energy cards from your discard pile to your Pokémon in any way you like." }
  ];
  public set: string = "TWM";
  public name: string = "Morpeko";
  public fullName: string = "Morpeko TWM 72";
  public text: string = "Morpeko";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "pokedex");
    }
    return state;
  }
}
