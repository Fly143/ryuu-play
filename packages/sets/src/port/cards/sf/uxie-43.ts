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

export class Uxie_43 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Set Up", powerType: PowerType.ABILITY, text: "Once during your turn, when you put Uxie from your hand onto your Bench, you may draw cards until you have 7 cards in your hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Psychic Restore", cost: [], damage: "20", text: "You may put Uxie and all cards attached to it on the bottom of your deck in any order." }
  ];
  public set: string = "SF";
  public name: string = "Uxie";
  public fullName: string = "Uxie SF 43";
  public text: string = "Uxie";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "drawUntilHand:7");
    }
    return state;
  }
}
