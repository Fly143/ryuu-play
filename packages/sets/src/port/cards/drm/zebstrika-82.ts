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

export class Zebstrika_82 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Blitzle";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sprint", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may discard your hand and draw 4 cards.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Head Bolt", cost: [], damage: "60", text: "" }
  ];
  public set: string = "DRM";
  public name: string = "Zebstrika";
  public fullName: string = "Zebstrika DRM 82";
  public text: string = "Zebstrika";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.drawCardsPower(this, store, state, effect).reduce(effect.power, 4);
    }
    return state;
  }
}
