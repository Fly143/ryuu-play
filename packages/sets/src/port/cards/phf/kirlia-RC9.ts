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

export class KirliaRC9 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Ralts";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Tiptoe Step", cost: [], damage: "", text: "Draw a card for each Psychic Energy attached to this Pokémon." },
      { name: "Double Slap", cost: [], damage: "20×", text: "Flip 2 coins. This attack does 20 damage times the number of heads." }
  ];
  public set: string = "PHF";
  public name: string = "Kirlia";
  public fullName: string = "Kirlia PHF RC9";
  public text: string = "Kirlia";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "drawPerEnergySelf:1");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 2, 20);
    }
    return state;
  }
}
