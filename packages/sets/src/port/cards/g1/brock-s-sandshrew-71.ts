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

export class BrockSSandshrew_71 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Defense Curl", cost: [], damage: "", text: "Flip a coin. If heads, prevent all damage done to Brock's Sandshrew during your opponent's next turn. (Any other effects of attacks still happen.)" },
      { name: "Rolling Attack", cost: [], damage: "20", text: "" }
  ];
  public set: string = "G1";
  public name: string = "Brock's Sandshrew";
  public fullName: string = "Brock's Sandshrew G1 71";
  public text: string = "Brock's Sandshrew";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.preventDamageNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
