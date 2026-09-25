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

export class Greninja_40 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Frogadier";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Shadow Stitching", cost: [], damage: "40", text: "Until the end of your opponent's next turn, each Pokémon your opponent has in play, in his or her hand, and in his or her discard pile has no Abilities. (This includes cards that come into play on that turn.)" },
      { name: "Moonlight Slash", cost: [], damage: "60+", text: "You may return a Water Energy from this Pokémon to your hand. If you do, this attack does 20 more damage." }
  ];
  public set: string = "GEN";
  public name: string = "Greninja";
  public fullName: string = "Greninja GEN 40";
  public text: string = "Greninja";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.scoopUpSelf(this, store, state, effect).use(effect);
    }
    return state;
  }
}
