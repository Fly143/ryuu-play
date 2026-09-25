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

export class Sandaconda_82 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Silicobra";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Big Sand Cannon", cost: [], damage: "60×", text: "Discard the top 6 cards of your deck. This attack does 60 damage for each Fighting Energy card you discarded in this way." },
      { name: "Skull Bash", cost: [], damage: "120", text: "" }
  ];
  public set: string = "SHF";
  public name: string = "Sandaconda";
  public fullName: string = "Sandaconda SHF 82";
  public text: string = "Sandaconda";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.millSelf(this, store, state, effect).use(effect, 6);
    }
    return state;
  }
}
