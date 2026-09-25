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

export class GengarEX_34 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 170;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Night Attack", cost: [], damage: "", text: "Put 3 damage counters on 1 of your opponent's Pokémon." },
      { name: "Dark Corridor", cost: [], damage: "60", text: "Your opponent's Active Pokémon is now Poisoned. Switch this Pokémon with 1 of your Benched Pokémon." }
  ];
  public set: string = "PHF";
  public name: string = "Gengar-EX";
  public fullName: string = "Gengar-EX PHF 34";
  public text: string = "Gengar-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.putCountersDefending(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.switchSelf(this, store, state, effect).use(effect);
    }
    return state;
  }
}
