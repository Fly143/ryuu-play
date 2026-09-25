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

export class SobbleOnTheBall_5 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Spectacular Save", cost: [], damage: "", text: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to this Pokémon." },
      { name: "Rain Splash", cost: [], damage: "20", text: "" }
  ];
  public set: string = "FUT20";
  public name: string = "Sobble on the Ball";
  public fullName: string = "Sobble on the Ball FUT20 5";
  public text: string = "Sobble on the Ball";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.preventDamageNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
