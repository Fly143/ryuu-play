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

export class Volcanion_252 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Strength", cost: [], damage: "50", text: "" },
      { name: "Powerful Steam", cost: [], damage: "90×", text: "Flip a coin for each Water Energy attached to this Pokémon. This attack does 90 damage for each heads." }
  ];
  public set: string = "POR";
  public name: string = "Volcanion";
  public fullName: string = "Volcanion POR 25";
  public text: string = "Volcanion";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 1, 90);
    }
    return state;
  }
}
