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

export class Garbodor_117 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Trubbish";
  public hp: number = 120;
    public height?: number = 1.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Chuck", cost: [], damage: "50×", text: "Discard any number of Pokémon Tool cards from your hand. This attack does 50 damage for each card you discarded in this way." },
      { name: "Venomous Hit", cost: [], damage: "80", text: "Your opponent's Active Pokémon is now Poisoned." }
  ];
  public set: string = "PAR";
  public name: string = "Garbodor";
  public fullName: string = "Garbodor PAR 117";
  public text: string = "Garbodor";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    return state;
  }
}
