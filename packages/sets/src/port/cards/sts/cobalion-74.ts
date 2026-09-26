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

export class Cobalion_74 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
    public height?: number = 2.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Quick Guard", cost: [], damage: "", text: "Prevent all damage done to this Pokémon by attacks from Basic Pokémon during your opponent's next turn. This Pokémon can't use Quick Guard during your next turn." },
      { name: "Revenge Blast", cost: [], damage: "30+", text: "This attack does 30 more damage for each Prize card your opponent has taken." }
  ];
  public set: string = "STS";
  public name: string = "Cobalion";
  public fullName: string = "Cobalion STS 74";
  public text: string = "Cobalion";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusPerPrize(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
