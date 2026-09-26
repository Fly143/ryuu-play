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

export class Mawile_24 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Pick Out", cost: [], damage: "", text: "Choose 1 face-down Prize card (yours or your opponent's) and put it face up. If that card is a Supporter card, use the effect of that card as the effect of this attack. (That card remains face up for the rest of the game.)" },
      { name: "Jaw Bite", cost: [], damage: "20", text: "During your next turn, if an attack does damage to the Defending Pokémon (after applying Weakness and Resistance), that attack does 20 more damage." }
  ];
  public set: string = "GE";
  public name: string = "Mawile";
  public fullName: string = "Mawile GE 24";
  public text: string = "Mawile";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.plusPower(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
