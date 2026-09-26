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

export class Bayleef_41 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Chikorita";
  public hp: number = 80;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Evolution Impulse", cost: [], damage: "", text: "Search your deck for an Evolution card, show it to your opponent, and put it into your hand. Shuffle your deck afterward." },
      { name: "Leaf Boomerang", cost: [], damage: "30×", text: "Flip 2 coins. This attack does 30 damage times the number of heads." }
  ];
  public set: string = "MT";
  public name: string = "Bayleef";
  public fullName: string = "Bayleef MT 41";
  public text: string = "Bayleef";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchPokemonToHand:1");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 2, 30);
    }
    return state;
  }
}
