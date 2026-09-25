import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
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

export class Noivern_112 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Noibat";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Tuning", cost: [], damage: "", text: "Shuffle your hand into your deck. Then, draw a number of cards equal to the number of cards in your opponent's hand." },
      { name: "Air Slash", cost: [], damage: "120", text: "Discard an Energy attached to this Pokémon." }
  ];
  public set: string = "BKP";
  public name: string = "Noivern";
  public fullName: string = "Noivern BKP 112";
  public text: string = "Noivern";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
