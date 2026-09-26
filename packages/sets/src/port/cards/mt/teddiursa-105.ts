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

export class Teddiursa_105 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rest", cost: [], damage: "", text: "Remove all Special Conditions and 2 damage counters from Teddiursa. Teddiursa is now Asleep." },
      { name: "Sweet Palm", cost: [], damage: "30", text: "Before doing damage, remove 1 damage counter from the Defending Pokémon." }
  ];
  public set: string = "MT";
  public name: string = "Teddiursa";
  public fullName: string = "Teddiursa MT 105";
  public text: string = "Teddiursa";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
