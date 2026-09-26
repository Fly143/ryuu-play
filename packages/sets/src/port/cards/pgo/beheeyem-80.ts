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

export class Beheeyem_80 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Elgyem";
  public hp: number = 90;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Psychic Sphere", cost: [], damage: "30", text: "" },
      { name: "Psychic Arrow", cost: [], damage: "", text: "This attack does 60 damage to 1 of your opponent's Pokémon. Also apply Weakness and Resistance for Benched Pokémon." }
  ];
  public set: string = "PGO";
  public name: string = "Beheeyem";
  public fullName: string = "Beheeyem PGO 80";
  public text: string = "Beheeyem";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 60);
    }
    return state;
  }
}
