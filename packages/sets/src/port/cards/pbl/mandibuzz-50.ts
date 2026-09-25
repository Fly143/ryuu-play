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

export class Mandibuzz_50 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Vullaby";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Bone Sniper", cost: [], damage: "", text: "This attack does 70 damage to 1 of your opponent's Pokémon that has any Special Energy attached. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Blasting Wind", cost: [], damage: "120", text: "" }
  ];
  public set: string = "PBL";
  public name: string = "Mandibuzz";
  public fullName: string = "Mandibuzz PBL 50";
  public text: string = "Mandibuzz";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 70);
    }
    return state;
  }
}
