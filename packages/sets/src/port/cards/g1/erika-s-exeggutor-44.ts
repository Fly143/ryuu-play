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

export class ErikaSExeggutor_44 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Erika's Exeggcute";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Psychic Exchange", cost: [], damage: "", text: "Shuffle your hand into your deck, then draw 5 cards." },
      { name: "Stomp", cost: [], damage: "30+", text: "Flip a coin. If heads, this attack does 30 damage plus 10 more damage; if tails, this attack does 30 damage." }
  ];
  public set: string = "G1";
  public name: string = "Erika's Exeggutor";
  public fullName: string = "Erika's Exeggutor G1 44";
  public text: string = "Erika's Exeggutor";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
