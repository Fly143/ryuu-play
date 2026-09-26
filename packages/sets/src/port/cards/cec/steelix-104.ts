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

export class Steelix_104 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Onix";
  public hp: number = 170;
    public height?: number = 9.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Ground Stream", cost: [], damage: "20", text: "Attach 2 Fighting Energy cards from your discard pile to this Pokémon." },
      { name: "Gigaton Shake", cost: [], damage: "220", text: "During your next turn, your Pokémon can't attack. (This includes Pokémon that come into play on that turn.)" }
  ];
  public set: string = "CEC";
  public name: string = "Steelix";
  public fullName: string = "Steelix CEC 104";
  public text: string = "Steelix";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.attachBasicFromDiscard(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.attachBasicFromDiscard(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
