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

export class MistySGyarados_49 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Misty's Magikarp";
  public hp: number = 180;
    public height?: number = 6.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Splashing Panic", cost: [], damage: "70×", text: "Discard the top 7 cards of your deck, and this attack does 70 damage for each Misty's Pokémon that you discarded in this way." },
      { name: "Waterfall", cost: [], damage: "120", text: "" }
  ];
  public set: string = "DRI";
  public name: string = "Misty's Gyarados";
  public fullName: string = "Misty's Gyarados DRI 49";
  public text: string = "Misty's Gyarados";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.millSelf(this, store, state, effect).use(effect, 7);
    }
    return state;
  }
}
