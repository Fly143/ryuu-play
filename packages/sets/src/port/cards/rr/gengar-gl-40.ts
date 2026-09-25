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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class GengarGL_40 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Confuse Ray", cost: [], damage: "10", text: "The Defending Pokémon is now Confused." },
      { name: "Attack and Hide", cost: [], damage: "", text: "Put 3 damage counters on 1 of your opponent's Pokémon. You may shuffle Gengar GL and all cards attached to it back into your deck." }
  ];
  public set: string = "RR";
  public name: string = "Gengar GL";
  public fullName: string = "Gengar GL RR 40";
  public text: string = "Gengar GL";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.putCountersDefending(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
