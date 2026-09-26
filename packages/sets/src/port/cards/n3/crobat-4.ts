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

export class Crobat_4 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Golbat";
  public hp: number = 90;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Triggered Poison", cost: [], damage: "20", text: "If your opponent attaches an Energy card to the Defending Pokémon during his or her next turn, that Pokémon becomes Poisoned." },
      { name: "Cross Attack", cost: [], damage: "20×", text: "Flip 4 coins. This attack does 20 damage times the number of heads. If you get 2 or more heads, the Defending Pokémon is now Confused." }
  ];
  public set: string = "N3";
  public name: string = "Crobat";
  public fullName: string = "Crobat N3 4";
  public text: string = "Crobat";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 4, 20);
    }
    return state;
  }
}
