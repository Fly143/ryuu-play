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

export class RegisteelEx_145 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 230;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Regi Charge", cost: [], damage: "", text: "Attach up to 2 Basic Metal Energy cards from your discard pile to this Pokémon." },
      { name: "Protecting Steel", cost: [], damage: "140", text: "During your opponent's next turn, this Pokémon takes 50 less damage from attacks (after applying Weakness and Resistance)." }
  ];
  public set: string = "ASC";
  public name: string = "Registeel ex";
  public fullName: string = "Registeel ex ASC 145";
  public text: string = "Registeel ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.reduceDamageNextTurn(this, store, state, effect).use(effect, 50);
    }
    return state;
  }
}
