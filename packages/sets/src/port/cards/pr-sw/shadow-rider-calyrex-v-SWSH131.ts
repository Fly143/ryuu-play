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

export class ShadowRiderCalyrexVSWSH131 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 210;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Cloak in Shadows", cost: [], damage: "", text: "Attach a Psychic Energy card from your discard pile to this Pokémon." },
      { name: "Hollow Binding", cost: [], damage: "130", text: "During your opponent's next turn, the Defending Pokémon can't retreat." }
  ];
  public set: string = "PR-SW";
  public name: string = "Shadow Rider Calyrex V";
  public fullName: string = "Shadow Rider Calyrex V PR-SW SWSH131";
  public text: string = "Shadow Rider Calyrex V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.attachBasicFromDiscard(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
