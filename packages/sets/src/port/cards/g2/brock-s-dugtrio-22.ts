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

export class BrockSDugtrio_22 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Brock's Diglett";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Lie Low", cost: [], damage: "", text: "All damage done to Brock's Dugtrio during your opponent's next turn is reduced by 20 (after applying Weakness and Resistance)." },
      { name: "Earthdrill", cost: [], damage: "60", text: "This attack can't be used unless Brock's Dugtrio used its Lie Low attack last turn." }
  ];
  public set: string = "G2";
  public name: string = "Brock's Dugtrio";
  public fullName: string = "Brock's Dugtrio G2 22";
  public text: string = "Brock's Dugtrio";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.selfReduceDamageNextTurn(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
