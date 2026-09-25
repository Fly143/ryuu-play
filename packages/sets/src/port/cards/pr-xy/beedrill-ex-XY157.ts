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

export class BeedrillEXXY157 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Double Scrapper", cost: [], damage: "", text: "Discard up to 2 Pokémon Tool cards attached to your opponent's Pokémon." },
      { name: "Pin Missile", cost: [], damage: "40×", text: "Flip 4 coins. This attack does 40 damage times the number of heads." }
  ];
  public set: string = "PR-XY";
  public name: string = "Beedrill-EX";
  public fullName: string = "Beedrill-EX PR-XY XY157";
  public text: string = "Beedrill-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 4, 40);
    }
    return state;
  }
}
