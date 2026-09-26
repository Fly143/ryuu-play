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

export class MSharpedoEXXY200 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Sharpedo-EX";
  public hp: number = 210;
    public height?: number = 1.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Torpedo Dive", cost: [], damage: "120", text: "This attack does 10 damage to each of your opponent's Benched Pokémon for each Colorless in that Pokémon's Retreat Cost. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "PR-XY";
  public name: string = "M Sharpedo-EX";
  public fullName: string = "M Sharpedo-EX PR-XY XY200";
  public text: string = "M Sharpedo-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageAllBench(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
