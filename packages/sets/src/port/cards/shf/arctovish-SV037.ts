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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ArctovishSV037 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Rare Fossil";
  public hp: number = 150;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Hard Face", cost: [], damage: "90", text: "During your opponent's next turn, this Pokémon takes 60 less damage from attacks (after applying Weakness and Resistance)." },
      { name: "Cold Breath", cost: [], damage: "130", text: "Your opponent's Active Pokémon is now Asleep." }
  ];
  public set: string = "SHF";
  public name: string = "Arctovish";
  public fullName: string = "Arctovish SHF SV037";
  public text: string = "Arctovish";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.reduceDamageNextTurn(this, store, state, effect).use(effect, 60);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    return state;
  }
}
