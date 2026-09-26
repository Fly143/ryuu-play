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

export class RaticateG_78 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Find", cost: [], damage: "", text: "Search your discard pile for a Trainer card or a Supporter card, show it to your opponent, and put it into your hand." },
      { name: "Biting Fang", cost: [], damage: "10+", text: "Flip a coin, if heads this attack does 10 damage plus 20 more damage." }
  ];
  public set: string = "SV";
  public name: string = "Raticate G";
  public fullName: string = "Raticate G SV 78";
  public text: string = "Raticate G";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
