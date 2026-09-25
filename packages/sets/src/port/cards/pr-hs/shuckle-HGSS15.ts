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

export class ShuckleHGSS15 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Fermenting Liquid", powerType: PowerType.ABILITY, text: "Whenever you attach an Energy card from your hand to Shuckle, draw a card.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Shell Stunner", cost: [], damage: "20", text: "Flip a coin. If heads, prevent all damage done to Shuckle by attacks during your opponent's next turn." }
  ];
  public set: string = "PR-HS";
  public name: string = "Shuckle";
  public fullName: string = "Shuckle PR-HS HGSS15";
  public text: string = "Shuckle";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.preventDamageNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
