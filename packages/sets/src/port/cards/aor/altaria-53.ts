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

export class Altaria_53 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Swablu";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Song of Echoes", cost: [], damage: "", text: "Shuffle your hand into your deck. Then, draw a number of cards equal to the number of Benched Pokémon (both yours and your opponent's)." },
      { name: "Midnight Eyes", cost: [], damage: "30", text: "Your opponent's Active Pokémon is now Asleep." }
  ];
  public set: string = "AOR";
  public name: string = "Altaria";
  public fullName: string = "Altaria AOR 53";
  public text: string = "Altaria";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    return state;
  }
}
