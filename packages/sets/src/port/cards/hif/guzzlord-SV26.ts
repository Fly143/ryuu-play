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

export class GuzzlordSV26 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 160;
    public height?: number = 5.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Lord's Valley", cost: [], damage: "160", text: "If you have exactly 2, 4, or 6 Prize cards remaining, discard the top 10 cards of your deck." }
  ];
  public set: string = "HIF";
  public name: string = "Guzzlord";
  public fullName: string = "Guzzlord HIF SV26";
  public text: string = "Guzzlord";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.millSelf(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
