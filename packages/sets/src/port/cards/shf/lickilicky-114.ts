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

export class Lickilicky_114 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Lickitung";
  public hp: number = 140;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Selickt", cost: [], damage: "", text: "Your opponent chooses to discard the top 3 cards of their deck or to discard 3 cards from their hand." },
      { name: "Pitch", cost: [], damage: "100", text: "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon." }
  ];
  public set: string = "SHF";
  public name: string = "Lickilicky";
  public fullName: string = "Lickilicky SHF 114";
  public text: string = "Lickilicky";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.gustOpponent(this, store, state, effect).use(effect);
    }
    return state;
  }
}
