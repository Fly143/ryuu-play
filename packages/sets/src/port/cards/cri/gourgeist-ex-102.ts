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

export class GourgeistEx_102 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Pumpkaboo";
  public hp: number = 270;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Horrifying Rondo", cost: [], damage: "30+", text: "This attack does 50 more damage for each of your Benched Pokémon that has any damage counters on it." },
      { name: "Ghostly Touch", cost: [], damage: "140", text: "Discard a random card from your opponent's hand." }
  ];
  public set: string = "CRI";
  public name: string = "Gourgeist ex";
  public fullName: string = "Gourgeist ex CRI 102";
  public text: string = "Gourgeist ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "bonusPerDamagedBench:50");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardOpponentHand(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
