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

export class Serperior_7 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Servine";
  public hp: number = 140;
    public height?: number = 3.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Coil", cost: [], damage: "40", text: "During your next turn, this Pokémon's attacks do 60 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance)." },
      { name: "Slashing Strike", cost: [], damage: "80", text: "This Pokémon can't use Slashing Strike during your next turn." }
  ];
  public set: string = "FAC";
  public name: string = "Serperior";
  public fullName: string = "Serperior FAC 7";
  public text: string = "Serperior";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.plusPower(this, store, state, effect).use(effect, 60);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
