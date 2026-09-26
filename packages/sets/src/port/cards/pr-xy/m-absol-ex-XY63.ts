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

export class MAbsolEXXY63 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Absol-EX";
  public hp: number = 210;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Disaster Wing", cost: [], damage: "80+", text: "Discard the top card of your opponent's deck. If that card is a Trainer card, this attack does 80 more damage." }
  ];
  public set: string = "PR-XY";
  public name: string = "M Absol-EX";
  public fullName: string = "M Absol-EX PR-XY XY63";
  public text: string = "M Absol-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.millOpponent(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
