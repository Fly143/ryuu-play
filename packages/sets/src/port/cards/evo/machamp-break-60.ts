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

export class MachampBREAK_60 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Machamp";
  public hp: number = 190;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Boomerang Lariat", cost: [], damage: "100", text: "During your next turn, this Pokémon's attacks do 100 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance)." }
  ];
  public set: string = "EVO";
  public name: string = "Machamp BREAK";
  public fullName: string = "Machamp BREAK EVO 60";
  public text: string = "Machamp BREAK";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.plusPower(this, store, state, effect).use(effect, 100);
    }
    return state;
  }
}
