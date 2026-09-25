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

export class Houndoom_12 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Houndour";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Ambush", cost: [], damage: "10+", text: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage." },
      { name: "Lonely Fang", cost: [], damage: "30+", text: "This attack does 30 damage plus 20 damage times the number of your opponent's Benched Pokémon minus the number of your Benched Pokémon. (For example, if your opponent has 3 Benched Pokémon and you have 1, this attack will do 30 damage plus 40 more damage.)" }
  ];
  public set: string = "SK";
  public name: string = "Houndoom";
  public fullName: string = "Houndoom SK 12";
  public text: string = "Houndoom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusPerOpponentBench(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
