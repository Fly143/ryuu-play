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

export class Hydreigon_78 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Zweilous";
  public hp: number = 150;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Tractorbeam", cost: [], damage: "", text: "Switch 1 of your opponent's Benched Pokémon with the Defending Pokémon. This attack does 40 damage to the new Defending Pokémon." },
      { name: "Obsidian Fang", cost: [], damage: "80", text: "Before doing damage, discard all Pokémon Tool cards attached to the Defending Pokémon." }
  ];
  public set: string = "FLF";
  public name: string = "Hydreigon";
  public fullName: string = "Hydreigon FLF 78";
  public text: string = "Hydreigon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.gustOpponent(this, store, state, effect).use(effect);
    }
    return state;
  }
}
