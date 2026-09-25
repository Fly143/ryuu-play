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

export class LugiaLEGEND_113 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Ocean Grow", powerType: PowerType.ABILITY, text: "Once during your turn, when you put Lugia LEGEND into play, you may look at the top 5 cards of your deck and attach all Energy cards you find there to Lugia LEGEND. Discard the other cards.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Elemental Blast", cost: [], damage: "200", text: "Discard a Fire Energy, Water Energy, and Lightning Energy attached to Lugia LEGEND." }
  ];
  public set: string = "HS";
  public name: string = "Lugia LEGEND";
  public fullName: string = "Lugia LEGEND HS 113";
  public text: string = "Lugia LEGEND";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "pokedex");
    }
    return state;
  }
}
