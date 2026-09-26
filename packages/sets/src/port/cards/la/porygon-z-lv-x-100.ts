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

export class PorygonZLVX_100 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Porygon-Z";
  public hp: number = 130;
    public height?: number = 0.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Mode Crash", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), when you put Porygon-Z LV.X from your hand onto your Active Porygon-Z, you may discard all of your opponent's Special Energy cards in play.", useWhenInPlay: true },
      { name: "Decode", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may search your deck for up to any 2 cards and shuffle your deck afterward. Then, put those cards on top of your deck in any order. This power can't be used if Porygon-Z is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [];
  public set: string = "LA";
  public name: string = "Porygon-Z LV.X";
  public fullName: string = "Porygon-Z LV.X LA 100";
  public text: string = "Porygon-Z LV.X";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[1]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "searchAnyToHand:1");
    }
    return state;
  }
}
