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

export class Furret_48 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Sentret";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Scavenger Hunt", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may put 2 cards from your hand into your deck. Then, search your deck for an Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward. This power can't be used if Furret is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Spinning Attack", cost: [], damage: "30", text: "" }
  ];
  public set: string = "AQ";
  public name: string = "Furret";
  public fullName: string = "Furret AQ 48";
  public text: string = "Furret";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "searchBasicToBench:1");
    }
    return state;
  }
}
