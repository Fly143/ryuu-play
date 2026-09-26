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

export class DarkMagneton_39 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Magnemite";
  public hp: number = 70;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Magnetic Lines", cost: [], damage: "20", text: "If your opponent has at least 2 Pokémon in play, move a basic Energy card from the Defending Pokémon to another of your opponent's Pokémon." },
      { name: "Poison Pulse", cost: [], damage: "40", text: "The Defending Pokémon is now Poisoned." }
  ];
  public set: string = "TRR";
  public name: string = "Dark Magneton";
  public fullName: string = "Dark Magneton TRR 39";
  public text: string = "Dark Magneton";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    return state;
  }
}
