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

export class Landorus_148 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Strafe", cost: [], damage: "20", text: "You may switch this Pokémon with 1 of your Benched Pokémon." },
      { name: "Earthen Boom", cost: [], damage: "120", text: "Move all Energy from this Pokémon to your Benched Pokémon in any way you like." }
  ];
  public set: string = "EVS";
  public name: string = "Landorus";
  public fullName: string = "Landorus EVS 148";
  public text: string = "Landorus";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.switchSelf(this, store, state, effect).use(effect);
    }
    return state;
  }
}
