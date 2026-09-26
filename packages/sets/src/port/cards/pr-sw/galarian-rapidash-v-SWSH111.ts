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

export class GalarianRapidashVSWSH111 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 210;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Libra Horn", cost: [], damage: "", text: "Put damage counters on 1 of your opponent's Pokémon until its remaining HP is 100." },
      { name: "Psychic", cost: [], damage: "60+", text: "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon." }
  ];
  public set: string = "PR-SW";
  public name: string = "Galarian Rapidash V";
  public fullName: string = "Galarian Rapidash V PR-SW SWSH111";
  public text: string = "Galarian Rapidash V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 30, 0);
    }
    return state;
  }
}
