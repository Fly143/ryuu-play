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

export class PidgeotEx_217 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Pidgeotto";
  public hp: number = 280;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Quick Search", powerType: PowerType.ABILITY, text: "Once during your turn, you may search your deck for a card and put it into your hand. Then, shuffle your deck. You can't use more than 1 Quick Search Ability each turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Blustery Wind", cost: [], damage: "120", text: "You may discard a Stadium in play." }
  ];
  public set: string = "OBF";
  public name: string = "Pidgeot ex";
  public fullName: string = "Pidgeot ex OBF 217";
  public text: string = "Pidgeot ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "searchAnyToHand:1");
    }
    return state;
  }
}
