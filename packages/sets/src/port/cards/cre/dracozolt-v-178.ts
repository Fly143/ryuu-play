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

export class DracozoltV_178 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 220;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Primeval Beak", cost: [], damage: "30", text: "During your opponent's next turn, Energy cards can't be attached from your opponent's hand to the Defending Pokémon." },
      { name: "Mountain Swing", cost: [], damage: "180", text: "Discard the top 3 cards of your deck." }
  ];
  public set: string = "CRE";
  public name: string = "Dracozolt V";
  public fullName: string = "Dracozolt V CRE 178";
  public text: string = "Dracozolt V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.millSelf(this, store, state, effect).use(effect, 3);
    }
    return state;
  }
}
