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

export class MetagrossEXXY34 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 180;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Magnetic Laser", cost: [], damage: "20", text: "You may move a Metal Energy from 1 of your Benched Pokémon to this Pokémon." },
      { name: "Squared Attack", cost: [], damage: "50×", text: "Flip 4 coins. This attack does 50 damage times the number of heads." }
  ];
  public set: string = "PR-XY";
  public name: string = "Metagross-EX";
  public fullName: string = "Metagross-EX PR-XY XY34";
  public text: string = "Metagross-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 4, 50);
    }
    return state;
  }
}
