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

export class NoivernEx_246 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Noibat";
  public hp: number = 260;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Covert Flight", cost: [], damage: "70", text: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Basic Pokémon." },
      { name: "Dominating Echo", cost: [], damage: "140", text: "During your opponent's next turn, they can't play any Special Energy or Stadium cards from their hand." }
  ];
  public set: string = "PAL";
  public name: string = "Noivern ex";
  public fullName: string = "Noivern ex PAL 246";
  public text: string = "Noivern ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.preventDamageNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
