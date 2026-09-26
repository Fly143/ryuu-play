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

export class Genesect_8 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Bug's Cannon", cost: [], damage: "", text: "This attack does 20 damage to 1 of your opponent's Pokémon for each Grass Energy attached to this Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Speed Attack", cost: [], damage: "110", text: "" }
  ];
  public set: string = "PFL";
  public name: string = "Genesect";
  public fullName: string = "Genesect PFL 8";
  public text: string = "Genesect";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
