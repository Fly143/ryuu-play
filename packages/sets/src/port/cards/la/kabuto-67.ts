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

export class Kabuto_67 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Dome Fossil";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Ancient Guidance", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may flip a coin. If heads, search your deck for Helix Fossil, Dome Fossil, or Old Amber and put it onto your Bench. Shuffle your deck afterward. This power can't be used if Kabuto is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Shell Attack", cost: [], damage: "20", text: "" }
  ];
  public set: string = "LA";
  public name: string = "Kabuto";
  public fullName: string = "Kabuto LA 67";
  public text: string = "Kabuto";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "searchAnyToHand:1");
    }
    return state;
  }
}
