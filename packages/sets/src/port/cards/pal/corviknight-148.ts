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

export class Corviknight_148 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Corvisquire";
  public hp: number = 170;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Accelerate", cost: [], damage: "50", text: "If your opponent's Pokémon is Knocked Out by damage from this attack, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon." },
      { name: "Spinning Bird", cost: [], damage: "200", text: "Discard 2 Energy from this Pokémon." }
  ];
  public set: string = "PAL";
  public name: string = "Corviknight";
  public fullName: string = "Corviknight PAL 148";
  public text: string = "Corviknight";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "preventEffectsMarker");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 2);
    }
    return state;
  }
}
