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

export class WoolooSWSH011 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Defense Curl", cost: [], damage: "", text: "Flip a coin. If heads, prevent all damage done to this Pokémon by attacks during your opponent's next turn." },
      { name: "Headbutt", cost: [], damage: "20", text: "" }
  ];
  public set: string = "PR-SW";
  public name: string = "Wooloo";
  public fullName: string = "Wooloo PR-SW SWSH011";
  public text: string = "Wooloo";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.preventDamageNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
