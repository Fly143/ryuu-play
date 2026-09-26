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

export class Octillery_34 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Remoraid";
  public hp: number = 80;
    public height?: number = 0.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Constrict", cost: [], damage: "10", text: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed." },
      { name: "Octazooka", cost: [], damage: "40", text: "Flip a coin. If heads, whenever the Defending Pokémon attacks, your opponent flips a coin. If tails, that attack does nothing. (Benching or evolving that Pokémon ends this effect.)" }
  ];
  public set: string = "N3";
  public name: string = "Octillery";
  public fullName: string = "Octillery N3 34";
  public text: string = "Octillery";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.PARALYZED);
    }
    return state;
  }
}
