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

export class Sandslash_61 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Sandshrew";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Spike Armor", cost: [], damage: "", text: "During your opponent's next turn, if Sandslash is damaged by an opponent's attack (even if Sandslash is Knocked Out), put 4 damage counters on the Attacking Pokémon." },
      { name: "Poison Spike", cost: [], damage: "60", text: "If the Defending Pokémon already has any damage counters on it, that Pokémon is now Poisoned." }
  ];
  public set: string = "MT";
  public name: string = "Sandslash";
  public fullName: string = "Sandslash MT 61";
  public text: string = "Sandslash";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.putDamageCountersDefending(this, store, state, effect).use(effect, 40);
    }
    return state;
  }
}
