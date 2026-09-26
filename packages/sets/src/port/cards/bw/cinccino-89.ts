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

export class Cinccino_89 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Minccino";
  public hp: number = 90;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Tail Slap", cost: [], damage: "20×", text: "Flip 2 coins. This attack does 20 damage times the number of heads." },
      { name: "Do the Wave", cost: [], damage: "20×", text: "Does 20 damage times the number of your Benched Pokémon." }
  ];
  public set: string = "BW";
  public name: string = "Cinccino";
  public fullName: string = "Cinccino BW 89";
  public text: string = "Cinccino";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 2, 20);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusPerOwnBench(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
