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

export class Lunatone_105 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Lunar Cycle", powerType: PowerType.ABILITY, text: "Once during your turn, if you have Solrock in play, you may discard a Basic Fighting Energy card from your hand in order to use this Ability. Draw 3 cards. You can't use more than 1 Lunar Cycle Ability each turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Power Gem", cost: [], damage: "50", text: "" }
  ];
  public set: string = "ASC";
  public name: string = "Lunatone";
  public fullName: string = "Lunatone ASC 105";
  public text: string = "Lunatone";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.drawCardsPower(this, store, state, effect).reduce(effect.power, 3);
    }
    return state;
  }
}
