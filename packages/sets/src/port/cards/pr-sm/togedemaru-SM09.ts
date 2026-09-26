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

export class TogedemaruSM09 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Defense Curl", cost: [], damage: "", text: "Flip a coin. If heads, prevent all damage done to this Pokémon by attacks during your opponent's next turn." },
      { name: "Discharge", cost: [], damage: "30×", text: "Discard all Lightning Energy from this Pokémon. This attack does 30 damage for each card you discarded in this way." }
  ];
  public set: string = "PR-SM";
  public name: string = "Togedemaru";
  public fullName: string = "Togedemaru PR-SM SM09";
  public text: string = "Togedemaru";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.preventDamageNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
