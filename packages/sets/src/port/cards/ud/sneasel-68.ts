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

export class Sneasel_68 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Fury Swipes", cost: [], damage: "10×", text: "Flip 3 coins. This attack does 10 damage times the number of heads." },
      { name: "Beat Up", cost: [], damage: "20×", text: "Flip a coin for each of your Pokémon in play. This attack does 20 damage times the number of heads." }
  ];
  public set: string = "UD";
  public name: string = "Sneasel";
  public fullName: string = "Sneasel UD 68";
  public text: string = "Sneasel";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 3, 10);
    }
    return state;
  }
}
