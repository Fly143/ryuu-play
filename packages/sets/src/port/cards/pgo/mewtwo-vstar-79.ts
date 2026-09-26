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

export class MewtwoVSTAR_79 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Mewtwo V";
  public hp: number = 280;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Psy Purge", cost: [], damage: "90×", text: "Discard up to 3 Psychic Energy from your Pokémon. This attack does 90 damage for each card you discarded in this way." },
      { name: "Star Raid", cost: [], damage: "", text: "This attack does 120 damage to each of your opponent's Pokémon V. This damage isn't affected by Weakness or Resistance. (You can't use more than 1 VSTAR Power in a game.)" }
  ];
  public set: string = "PGO";
  public name: string = "Mewtwo VSTAR";
  public fullName: string = "Mewtwo VSTAR PGO 79";
  public text: string = "Mewtwo VSTAR";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.damageAllOpponent(this, store, state, effect).use(effect, 120);
    }
    return state;
  }
}
