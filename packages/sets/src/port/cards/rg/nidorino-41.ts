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

export class Nidorino_41 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Nidoran ♂";
  public hp: number = 70;
    public height?: number = 0.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Double Stab", cost: [], damage: "20×", text: "Flip 2 coins. This attack does 20 damage times the number of heads." },
      { name: "Rend", cost: [], damage: "30+", text: "If the Defending Pokémon already has any damage counters on it, this attack does 30 damage plus 30 more damage." }
  ];
  public set: string = "RG";
  public name: string = "Nidorino";
  public fullName: string = "Nidorino RG 41";
  public text: string = "Nidorino";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 2, 20);
    }
    return state;
  }
}
