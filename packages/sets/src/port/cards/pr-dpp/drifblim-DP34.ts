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

export class DrifblimDP34 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Drifloon";
  public hp: number = 80;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Wind Wave", cost: [], damage: "", text: "Search your discard pile for up to 5 in any combination of Pokémon and Supporter cards. Show them to your opponent and shuffle them into your deck." },
      { name: "Explosive Smoke", cost: [], damage: "60", text: "Does 10 damage to each Benched Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "PR-DPP";
  public name: string = "Drifblim";
  public fullName: string = "Drifblim PR-DPP DP34";
  public text: string = "Drifblim";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.damageAllBench(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
