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

export class DarkTyranitar_11 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Dark Pupitar";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Mountain Smasher", cost: [], damage: "20×", text: "Flip a number of coins equal to the number of Fighting Energy cards attached to Dark Tyranitar. This attack does 20 damage times the number of heads. Then, for each heads, discard the top card from your opponent's deck." },
      { name: "Fling Away", cost: [], damage: "50", text: "If your opponent has any Benched Pokémon, this attack does 30 damage instead of 50 and choose 1 of those Benched Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "N4";
  public name: string = "Dark Tyranitar";
  public fullName: string = "Dark Tyranitar N4 11";
  public text: string = "Dark Tyranitar";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 8, 20);
    }
    return state;
  }
}
