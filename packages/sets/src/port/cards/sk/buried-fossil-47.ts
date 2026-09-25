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

export class BuriedFossil_47 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 30;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Reconstruction", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if you have a basic Energy card in your hand, you may search your deck for an Omanyte or Kabuto card, show it to your opponent, and put it into your hand. Then put a basic Energy card from your hand into your deck. Shuffle your deck afterward.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [];
  public set: string = "SK";
  public name: string = "Buried Fossil";
  public fullName: string = "Buried Fossil SK 47";
  public text: string = "Buried Fossil";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "searchAnyToHand:1");
    }
    return state;
  }
}
