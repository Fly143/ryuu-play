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

export class Polteageist_83 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Sinistea";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Tea Break", powerType: PowerType.ABILITY, text: "You must discard a Pokémon that has the Mad Party attack from your hand in order to use this Ability. Once during your turn, you may draw 2 cards.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Mad Party", cost: [], damage: "20×", text: "This attack does 20 damage for each Pokémon in your discard pile that has the Mad Party attack." }
  ];
  public set: string = "DAA";
  public name: string = "Polteageist";
  public fullName: string = "Polteageist DAA 83";
  public text: string = "Polteageist";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.drawCardsPower(this, store, state, effect).reduce(effect.power, 2);
    }
    return state;
  }
}
