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

export class Sylveon_72 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Eevee";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Curly Ribbon", cost: [], damage: "30", text: "Move an Energy attached to your opponent's Active Pokémon to 1 of his or her Benched Pokémon." },
      { name: "Echoed Voice", cost: [], damage: "50", text: "During your next turn, this Pokémon's Echoed Voice attack does 50 more damage (before applying Weakness and Resistance)." }
  ];
  public set: string = "FFI";
  public name: string = "Sylveon";
  public fullName: string = "Sylveon FFI 72";
  public text: string = "Sylveon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 0, 0);
    }
    return state;
  }
}
