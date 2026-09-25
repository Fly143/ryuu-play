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

export class Vespiquen_10 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Combee";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Intelligence Gathering", cost: [], damage: "10", text: "You may draw cards until you have 6 cards in your hand." },
      { name: "Bee Revenge", cost: [], damage: "20+", text: "This attack does 10 more damage for each Pokémon in your discard pile." }
  ];
  public set: string = "BKT";
  public name: string = "Vespiquen";
  public fullName: string = "Vespiquen BKT 10";
  public text: string = "Vespiquen";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "drawUntilHand:6");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 10, 0);
    }
    return state;
  }
}
