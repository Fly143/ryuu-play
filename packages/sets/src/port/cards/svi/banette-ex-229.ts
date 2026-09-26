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

export class BanetteEx_229 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Shuppet";
  public hp: number = 250;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Everlasting Darkness", cost: [], damage: "30", text: "During your opponent's next turn, they can't play any Item cards from their hand." },
      { name: "Poltergeist", cost: [], damage: "60×", text: "Your opponent reveals their hand. This attack does 60 damage for each Trainer card you find there." }
  ];
  public set: string = "SVI";
  public name: string = "Banette ex";
  public fullName: string = "Banette ex SVI 229";
  public text: string = "Banette ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.peekOpponentHand(this, store, state, effect).use(effect);
    }
    return state;
  }
}
