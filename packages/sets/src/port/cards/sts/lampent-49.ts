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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Lampent_49 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Litwick";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Mirror Mirror", cost: [], damage: "", text: "Each player either draws or discards cards until that player has 4 cards in his or her hand. (Your opponent does this first.)" },
      { name: "Flickering Flames", cost: [], damage: "20", text: "Your opponent's Active Pokémon is now Asleep." }
  ];
  public set: string = "STS";
  public name: string = "Lampent";
  public fullName: string = "Lampent STS 49";
  public text: string = "Lampent";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    return state;
  }
}
