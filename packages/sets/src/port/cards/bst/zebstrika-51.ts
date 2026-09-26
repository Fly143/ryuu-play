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

export class Zebstrika_51 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Blitzle";
  public hp: number = 120;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Coordinated Bolt", cost: [], damage: "30+", text: "If 1 of your other Rapid Strike Pokémon used an attack during your last turn, this attack does 90 more damage." },
      { name: "Spark Rush", cost: [], damage: "90×", text: "Flip a coin until you get tails. This attack does 90 damage for each heads." }
  ];
  public set: string = "BST";
  public name: string = "Zebstrika";
  public fullName: string = "Zebstrika BST 51";
  public text: string = "Zebstrika";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 90, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 1, 90);
    }
    return state;
  }
}
