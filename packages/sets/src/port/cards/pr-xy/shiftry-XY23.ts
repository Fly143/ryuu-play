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

export class ShiftryXY23 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Nuzleaf";
  public hp: number = 140;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Whisk Away", cost: [], damage: "30+", text: "Your opponent reveals his or her hand. Choose a Pokémon you find there and put it on the bottom your opponent's deck. If you do, this attack does 30 more damage." },
      { name: "Spirit Dance", cost: [], damage: "60+", text: "Flip 2 coins. This attack does 30 more damage for each heads." }
  ];
  public set: string = "PR-XY";
  public name: string = "Shiftry";
  public fullName: string = "Shiftry PR-XY XY23";
  public text: string = "Shiftry";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.peekOpponentHand(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 30, 0);
    }
    return state;
  }
}
