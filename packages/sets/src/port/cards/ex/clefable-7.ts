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

export class Clefable_7 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Clefairy";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Moonlight", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may put a card from your hand back on your deck. If you do, search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward. This power can't be used if Clefable is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Doubleslap", cost: [], damage: "20×", text: "Flip 2 coins. This attack does 20 times the number of heads." }
  ];
  public set: string = "EX";
  public name: string = "Clefable";
  public fullName: string = "Clefable EX 7";
  public text: string = "Clefable";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "searchAnyToHand:1");
    }
    return state;
  }
}
