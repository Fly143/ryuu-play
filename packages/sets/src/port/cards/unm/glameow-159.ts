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

export class Glameow_159 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Caturday", cost: [], damage: "", text: "Draw a card. If you do, this Pokémon is now Asleep." },
      { name: "Boing Boing Tail", cost: [], damage: "", text: "This attack does 60 damage to 1 of your opponent's Pokémon-GX or Pokémon-EX. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "UNM";
  public name: string = "Glameow";
  public fullName: string = "Glameow UNM 159";
  public text: string = "Glameow";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 60);
    }
    return state;
  }
}
