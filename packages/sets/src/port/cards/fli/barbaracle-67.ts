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

export class Barbaracle_67 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Binacle";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Seven Shock", cost: [], damage: "30", text: "If you have exactly 7 cards in your hand, your opponent's Active Pokémon is now Paralyzed." },
      { name: "Claw Slash", cost: [], damage: "90", text: "" }
  ];
  public set: string = "FLI";
  public name: string = "Barbaracle";
  public fullName: string = "Barbaracle FLI 67";
  public text: string = "Barbaracle";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.PARALYZED);
    }
    return state;
  }
}
