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

export class KinglerVMAX_29 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Kingler V";
  public hp: number = 330;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Bubbles Galore", cost: [], damage: "", text: "Search your deck for up to 5 Water Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck." },
      { name: "G-Max Pincer", cost: [], damage: "240", text: "This Pokémon also does 30 damage to itself." }
  ];
  public set: string = "FST";
  public name: string = "Kingler VMAX";
  public fullName: string = "Kingler VMAX FST 29";
  public text: string = "Kingler VMAX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
