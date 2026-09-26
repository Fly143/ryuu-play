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

export class Melmetal_189 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Meltan";
  public hp: number = 150;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Ingot Swing", cost: [], damage: "80", text: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Pokémon that have an Ability." },
      { name: "Blasting Hammer", cost: [], damage: "150", text: "Discard an Energy from this Pokémon." }
  ];
  public set: string = "EVS";
  public name: string = "Melmetal";
  public fullName: string = "Melmetal EVS 189";
  public text: string = "Melmetal";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.preventDamageNextTurn(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
