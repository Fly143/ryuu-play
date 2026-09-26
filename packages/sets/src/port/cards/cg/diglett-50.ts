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

export class Diglett_502 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Mud Slap", cost: [], damage: "10", text: "" },
      { name: "Sand Pit", cost: [], damage: "20", text: "The Defending Pokémon can't retreat during your opponent's next turn." }
  ];
  public set: string = "CG";
  public name: string = "Diglett";
  public fullName: string = "Diglett CG 50";
  public text: string = "Diglett";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
