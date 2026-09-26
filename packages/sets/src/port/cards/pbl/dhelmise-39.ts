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

export class Dhelmise_39 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 140;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Vengeful Anchor", cost: [], damage: "30+", text: "If you have 4 or more Pokémon that have the Hide 'n' Sneak Ability in your discard pile, this attack does 140 more damage." }
  ];
  public set: string = "PBL";
  public name: string = "Dhelmise";
  public fullName: string = "Dhelmise PBL 39";
  public text: string = "Dhelmise";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 140, 1);
    }
    return state;
  }
}
