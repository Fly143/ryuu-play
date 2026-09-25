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

export class Chandelure_382 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Lampent";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Alluring Light", powerType: PowerType.ABILITY, text: "Once during your turn, you may have each player draw a card.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Mind Ruler", cost: [], damage: "30×", text: "This attack does 30 damage for each card in your opponent's hand." }
  ];
  public set: string = "TWM";
  public name: string = "Chandelure";
  public fullName: string = "Chandelure TWM 38";
  public text: string = "Chandelure";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.drawCardsPower(this, store, state, effect).reduce(effect.power, 1);
    }
    return state;
  }
}
