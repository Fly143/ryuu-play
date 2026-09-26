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

export class RapidStrikeUrshifu_44 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Kubfu";
  public hp: number = 140;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Slashing Claw", cost: [], damage: "40", text: "" },
      { name: "Rapid-Fisted Rush", cost: [], damage: "30×", text: "This attack does 30 damage for each of your Rapid Strike Pokémon in play." }
  ];
  public set: string = "BST";
  public name: string = "Rapid Strike Urshifu";
  public fullName: string = "Rapid Strike Urshifu BST 44";
  public text: string = "Rapid Strike Urshifu";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusPerOwnBench(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
