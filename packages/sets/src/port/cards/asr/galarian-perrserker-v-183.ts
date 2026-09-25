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

export class GalarianPerrserkerV_183 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 200;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Feelin' Fine", cost: [], damage: "", text: "Draw 3 cards." },
      { name: "Treasure Rush", cost: [], damage: "20×", text: "This attack does 20 damage for each card in your hand." }
  ];
  public set: string = "ASR";
  public name: string = "Galarian Perrserker V";
  public fullName: string = "Galarian Perrserker V ASR 183";
  public text: string = "Galarian Perrserker V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.drawCardsAttack(this, store, state, effect).use(effect, 3);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return /* damageTimesHand:20:self */ state;
    }
    return state;
  }
}
