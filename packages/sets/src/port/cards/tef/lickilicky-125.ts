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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Lickilicky_125 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Lickitung";
  public hp: number = 150;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Body Slam", cost: [], damage: "50", text: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed." },
      { name: "Tonguenado", cost: [], damage: "70×", text: "Flip 4 coins. This attack does 70 damage for each heads." }
  ];
  public set: string = "TEF";
  public name: string = "Lickilicky";
  public fullName: string = "Lickilicky TEF 125";
  public text: string = "Lickilicky";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.PARALYZED);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 4, 70);
    }
    return state;
  }
}
