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

export class Glastrier_51 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Freeze Down", cost: [], damage: "40", text: "If the Defending Pokémon is a Basic Pokémon, it can't attack during your opponent's next turn." },
      { name: "Wild Tackle", cost: [], damage: "130", text: "This Pokémon also does 30 damage to itself." }
  ];
  public set: string = "ASR";
  public name: string = "Glastrier";
  public fullName: string = "Glastrier ASR 51";
  public text: string = "Glastrier";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
