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

export class Pidgeot_124 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Pidgeotto";
  public hp: number = 130;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Whirlwind", cost: [], damage: "60", text: "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon." },
      { name: "Spin Storm", cost: [], damage: "", text: "Your opponent puts their Active Pokémon and all cards attached to it into their hand." }
  ];
  public set: string = "UNB";
  public name: string = "Pidgeot";
  public fullName: string = "Pidgeot UNB 124";
  public text: string = "Pidgeot";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.gustOpponent(this, store, state, effect).use(effect);
    }
    return state;
  }
}
