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

export class GumshoosSM97 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Yungoos";
  public hp: number = 110;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Identify", cost: [], damage: "20+", text: "Your opponent reveals their hand. If you find a Pokémon there, this attack does 80 more damage." },
      { name: "Whap Down", cost: [], damage: "70", text: "" }
  ];
  public set: string = "PR-SM";
  public name: string = "Gumshoos";
  public fullName: string = "Gumshoos PR-SM SM97";
  public text: string = "Gumshoos";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.peekOpponentHand(this, store, state, effect).use(effect);
    }
    return state;
  }
}
