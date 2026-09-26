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

export class Raticate_29 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Rattata";
  public hp: number = 70;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Recruit", cost: [], damage: "", text: "Look at your opponent's hand, choose a Supporter card you find there, and discard it. Then, use the effect of that card as the effect of this attack." },
      { name: "Extend Fang", cost: [], damage: "20+", text: "If Raticate has a Pokémon Tool card attached to it, this attack does 20 damage plus 40 more damage." }
  ];
  public set: string = "AR";
  public name: string = "Raticate";
  public fullName: string = "Raticate AR 29";
  public text: string = "Raticate";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.peekOpponentHand(this, store, state, effect).use(effect);
    }
    return state;
  }
}
