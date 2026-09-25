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

export class Spiritomb_893 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Ticking Terror", cost: [], damage: "", text: "Until the end of your next turn, the Defending Pokémon's Weakness is now Darkness. (The amount of Weakness doesn't change.)" },
      { name: "Cursed Drop", cost: [], damage: "", text: "Put 2 damage counters on your opponent's Pokémon in any way you like." }
  ];
  public set: string = "FST";
  public name: string = "Spiritomb";
  public fullName: string = "Spiritomb FST 89";
  public text: string = "Spiritomb";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.putCountersDefending(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
