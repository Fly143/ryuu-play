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

export class Gardevoir_69 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Kirlia";
  public hp: number = 150;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Refinement", powerType: PowerType.ABILITY, text: "You must discard a card from your hand in order to use this Ability. Once during your turn, you may draw 2 cards.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Magical Shot", cost: [], damage: "120", text: "" }
  ];
  public set: string = "PGO";
  public name: string = "Gardevoir";
  public fullName: string = "Gardevoir PGO 69";
  public text: string = "Gardevoir";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.drawCardsPower(this, store, state, effect).reduce(effect.power, 2);
    }
    return state;
  }
}
