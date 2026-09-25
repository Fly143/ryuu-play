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

export class RillaboomV_175 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 220;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Forest Feast", cost: [], damage: "", text: "Search your deck for up to 2 Basic Grass Pokémon and put them onto your Bench. Then, shuffle your deck." },
      { name: "Wood Hammer", cost: [], damage: "220", text: "This Pokémon also does 30 damage to itself." }
  ];
  public set: string = "RCL";
  public name: string = "Rillaboom V";
  public fullName: string = "Rillaboom V RCL 175";
  public text: string = "Rillaboom V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.searchBasicToBench(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
