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

export class Solrock_45 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sunshine Fate", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if you have Lunatone in play, you may look at the top 3 cards of your deck and put them back on top of your deck in any order. This power can't be used if Solrock is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Luna Turn", cost: [], damage: "30+", text: "If Lunatone is in your discard pile, this attack does 30 damage plus 30 more damage. Then, search your discard pile for Lunatone, show it to your opponent, and shuffle it into your deck." }
  ];
  public set: string = "SV";
  public name: string = "Solrock";
  public fullName: string = "Solrock SV 45";
  public text: string = "Solrock";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "pokedex");
    }
    return state;
  }
}
