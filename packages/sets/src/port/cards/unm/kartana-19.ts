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

export class Kartana_19 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 3.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Big Cut", cost: [], damage: "10+", text: "If you have exactly 4 Prize cards remaining, this attack does 120 more damage." },
      { name: "False Swipe", cost: [], damage: "", text: "Flip a coin. If heads, put damage counters on your opponent's Active Pokémon until its remaining HP is 10." }
  ];
  public set: string = "UNM";
  public name: string = "Kartana";
  public fullName: string = "Kartana UNM 19";
  public text: string = "Kartana";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 120, 1);
    }
    return state;
  }
}
