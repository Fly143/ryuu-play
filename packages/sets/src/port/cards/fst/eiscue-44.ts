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

export class Eiscue_442 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Block Slider", cost: [], damage: "", text: "This attack does 40 damage to 1 of your opponent's Pokémon for each Fusion Strike Energy attached to all of your Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Icicle Missile", cost: [], damage: "100", text: "" }
  ];
  public set: string = "FST";
  public name: string = "Eiscue";
  public fullName: string = "Eiscue FST 44";
  public text: string = "Eiscue";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 40);
    }
    return state;
  }
}
