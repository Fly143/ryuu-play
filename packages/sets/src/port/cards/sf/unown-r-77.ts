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

export class UnownR_77 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "RETIRE", powerType: PowerType.ABILITY, text: "Once during your turn, if Unown R is on your Bench, you may discard Unown R and all cards attached to it. (This doesn't count as a Knocked Out Pokémon.) Then, draw a card.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hidden Power", cost: [], damage: "", text: "Move any number of basic Energy cards attached to your Pokémon to your other Pokémon in any way you like." }
  ];
  public set: string = "SF";
  public name: string = "Unown [R]";
  public fullName: string = "Unown [R] SF 77";
  public text: string = "Unown [R]";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.drawCardsPower(this, store, state, effect).reduce(effect.power, 1);
    }
    return state;
  }
}
