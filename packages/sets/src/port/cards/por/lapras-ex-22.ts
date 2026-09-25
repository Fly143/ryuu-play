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

export class LaprasEx_22 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 210;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Hydro Turn", cost: [], damage: "30×", text: "This attack does 30 damage for each Water Energy attached to this Pokémon. Switch this Pokémon with 1 of your Benched Pokémon." },
      { name: "Surf", cost: [], damage: "140", text: "" }
  ];
  public set: string = "POR";
  public name: string = "Lapras ex";
  public fullName: string = "Lapras ex POR 22";
  public text: string = "Lapras ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.switchSelf(this, store, state, effect).use(effect);
    }
    return state;
  }
}
