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

export class GengarVMAX_271 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Gengar V";
  public hp: number = 320;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Fear and Panic", cost: [], damage: "60×", text: "This attack does 60 damage for each of your opponent's Pokémon V and Pokémon-GX in play." },
      { name: "G-Max Swallow Up", cost: [], damage: "250", text: "During your next turn, this Pokémon can't attack." }
  ];
  public set: string = "EVS";
  public name: string = "Gengar VMAX";
  public fullName: string = "Gengar VMAX EVS 271";
  public text: string = "Gengar VMAX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
