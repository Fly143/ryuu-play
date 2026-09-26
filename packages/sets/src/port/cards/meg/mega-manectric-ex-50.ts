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

export class MegaManectricEx_50 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Electrike";
  public hp: number = 330;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Flash Ray", cost: [], damage: "120", text: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Basic Pokémon." },
      { name: "Riotous Blasting", cost: [], damage: "200+", text: "You may discard all Energy from this Pokémon and have this attack do 130 more damage." }
  ];
  public set: string = "MEG";
  public name: string = "Mega Manectric ex";
  public fullName: string = "Mega Manectric ex MEG 50";
  public text: string = "Mega Manectric ex";

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
