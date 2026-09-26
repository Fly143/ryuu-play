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

export class Avalugg_45 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Bergmite";
  public hp: number = 150;
    public height?: number = 2.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Frost Barrier", cost: [], damage: "80", text: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance)." },
      { name: "Hammer In", cost: [], damage: "140", text: "" }
  ];
  public set: string = "CRE";
  public name: string = "Avalugg";
  public fullName: string = "Avalugg CRE 45";
  public text: string = "Avalugg";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.reduceDamageNextTurn(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
