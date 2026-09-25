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

export class Gigalith_71 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Boldore";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rock Artillery", cost: [], damage: "50×", text: "Discard any amount of Fighting Energy from your Pokémon. This attack does 50 damage for each card you discarded in this way." },
      { name: "Rock Tumble", cost: [], damage: "120", text: "This attack's damage isn't affected by Resistance." }
  ];
  public set: string = "SUM";
  public name: string = "Gigalith";
  public fullName: string = "Gigalith SUM 71";
  public text: string = "Gigalith";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.ignoreWeaknessResistance(this, store, state, effect).use(effect);
    }
    return state;
  }
}
