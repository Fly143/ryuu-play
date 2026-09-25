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

export class Electabuzz_76 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Energy Draw", cost: [], damage: "", text: "Search your deck for a basic Energy card and attach it to Electabuzz. Shuffle your deck afterward." },
      { name: "Reflect Energy", cost: [], damage: "20", text: "If you have any Benched Pokémon and if there are any basic Energy cards attached to Electabuzz, take 1 of those Energy cards and attach it to 1 of those Pokémon." }
  ];
  public set: string = "EX";
  public name: string = "Electabuzz";
  public fullName: string = "Electabuzz EX 76";
  public text: string = "Electabuzz";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.searchEnergyToSelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
