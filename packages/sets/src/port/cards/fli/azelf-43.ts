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

export class Azelf_43 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Psychic Abduction", cost: [], damage: "", text: "You can use this attack only if you go second, and only on your first turn. Shuffle 1 of your opponent's Benched Pokémon and all cards attached to it into their deck." },
      { name: "Hypnoblast", cost: [], damage: "10", text: "Your opponent's Active Pokémon is now Asleep." }
  ];
  public set: string = "FLI";
  public name: string = "Azelf";
  public fullName: string = "Azelf FLI 43";
  public text: string = "Azelf";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    return state;
  }
}
