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

export class Plusle_5 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Cheer Up", cost: [], damage: "", text: "Draw a card. If you have Minun in play, draw 2 cards instead." },
      { name: "Positive Ion", cost: [], damage: "20+", text: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage." },
      { name: "Body Bolt", cost: [], damage: "", text: "Choose 1 of your opponent's Pokémon that has any Poké-Bodies. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "POP3";
  public name: string = "Plusle";
  public fullName: string = "Plusle POP3 5";
  public text: string = "Plusle";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
