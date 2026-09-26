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

export class MCharizardEX_108 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Charizard-EX";
  public hp: number = 230;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Wild Blaze", cost: [], damage: "300", text: "Discard the top 5 cards of your deck." }
  ];
  public set: string = "FLF";
  public name: string = "M Charizard-EX";
  public fullName: string = "M Charizard-EX FLF 108";
  public text: string = "M Charizard-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.millSelf(this, store, state, effect).use(effect, 5);
    }
    return state;
  }
}
