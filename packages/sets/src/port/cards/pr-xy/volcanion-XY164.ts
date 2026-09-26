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

export class VolcanionXY164 extends PokemonCard {
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
      { name: "Concentrated Fire", cost: [], damage: "50×", text: "Flip a coin for each Fire Energy attached to this Pokémon. This attack does 50 damage times the number of heads." },
      { name: "Combustion Impact", cost: [], damage: "100", text: "Your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon." }
  ];
  public set: string = "PR-XY";
  public name: string = "Volcanion";
  public fullName: string = "Volcanion PR-XY XY164";
  public text: string = "Volcanion";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.gustOpponent(this, store, state, effect).use(effect);
    }
    return state;
  }
}
