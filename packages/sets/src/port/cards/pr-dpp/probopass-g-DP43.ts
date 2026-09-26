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

export class ProbopassGDP43 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Nose Unit", cost: [], damage: "", text: "This attack does 20 damage to each of your opponent's Pokémon that has any Poké-Bodies. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Loud Snort", cost: [], damage: "70", text: "Probopass G's Retreat Cost is 0 until the end of your next turn." }
  ];
  public set: string = "PR-DPP";
  public name: string = "Probopass G";
  public fullName: string = "Probopass G PR-DPP DP43";
  public text: string = "Probopass G";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageAllOpponent(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
