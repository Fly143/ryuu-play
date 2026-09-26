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

export class Torkoal_35 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Stampede", cost: [], damage: "30", text: "" },
      { name: "Concentrated Fire", cost: [], damage: "80×", text: "Flip a coin for each Fire Energy attached to this Pokémon. This attack does 80 damage for each heads." }
  ];
  public set: string = "SVI";
  public name: string = "Torkoal";
  public fullName: string = "Torkoal SVI 35";
  public text: string = "Torkoal";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 1, 80);
    }
    return state;
  }
}
