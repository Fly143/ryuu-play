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

export class Gyarados_102 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Spiral Growth", cost: [], damage: "20", text: "Flip a coin until you get tails. For each heads, search your discard pile for a basic Energy card and attach it to Gyarados Star." },
      { name: "All-out Blast", cost: [], damage: "50+", text: "Discard cards from the top of your deck until you have 1 card left. This attack does 50 damage plus 20 more damage for each Energy card you discarded in this way." }
  ];
  public set: string = "HP";
  public name: string = "Gyarados ★ δ";
  public fullName: string = "Gyarados ★ δ HP 102";
  public text: string = "Gyarados ★ δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
