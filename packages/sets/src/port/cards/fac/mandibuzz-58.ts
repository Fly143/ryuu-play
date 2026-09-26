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

export class Mandibuzz_58 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Vullaby";
  public hp: number = 110;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Bone Drop", cost: [], damage: "", text: "This attack does 60 damage to 1 of your opponent's Pokémon that has an Ability. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Cutting Wind", cost: [], damage: "80", text: "" }
  ];
  public set: string = "FAC";
  public name: string = "Mandibuzz";
  public fullName: string = "Mandibuzz FAC 58";
  public text: string = "Mandibuzz";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 60);
    }
    return state;
  }
}
