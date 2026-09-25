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

export class Mismagius_66 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Misdreavus";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Twisted Incantation", powerType: PowerType.ABILITY, text: "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may have your opponent shuffle his or her hand into his or her deck and draw a card for each of his or her remaining Prize cards.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Curse Deeply", cost: [], damage: "60", text: "Your opponent's Active Pokémon is now Confused." }
  ];
  public set: string = "BKP";
  public name: string = "Mismagius";
  public fullName: string = "Mismagius BKP 66";
  public text: string = "Mismagius";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    return state;
  }
}
