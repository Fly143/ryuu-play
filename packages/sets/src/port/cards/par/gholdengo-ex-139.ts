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

export class GholdengoEx_139 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Gimmighoul";
  public hp: number = 260;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Coin Bonus", powerType: PowerType.ABILITY, text: "Once during your turn, you may draw a card. If this Pokémon is in the Active Spot, draw 1 more card.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Make It Rain", cost: [], damage: "50×", text: "Discard any number of Basic Energy cards from your hand. This attack does 50 damage for each card you discarded in this way." }
  ];
  public set: string = "PAR";
  public name: string = "Gholdengo ex";
  public fullName: string = "Gholdengo ex PAR 139";
  public text: string = "Gholdengo ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.drawCardsPower(this, store, state, effect).reduce(effect.power, 1);
    }
    return state;
  }
}
