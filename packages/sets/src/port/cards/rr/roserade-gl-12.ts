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

export class RoseradeGL_12 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
    public height?: number = 0.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Poison Bind", cost: [], damage: "10", text: "The Defending Pokémon is now Poisoned and can't retreat during your opponent's next turn." },
      { name: "Long Whip", cost: [], damage: "30", text: "If the Defending Pokémon is affected by any Special Conditions, you may do 30 damage to any 1 Benched Pokémon instead. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "RR";
  public name: string = "Roserade GL";
  public fullName: string = "Roserade GL RR 12";
  public text: string = "Roserade GL";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
