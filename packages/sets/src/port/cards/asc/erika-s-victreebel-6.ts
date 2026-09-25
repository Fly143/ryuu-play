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

export class ErikaSVictreebel_6 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Erika's Weepinbell";
  public hp: number = 150;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Flower Garden Rondo", cost: [], damage: "40×", text: "This attack does 40 damage for each of your Erika's Pokémon in play." },
      { name: "Solar Beam", cost: [], damage: "130", text: "" }
  ];
  public set: string = "ASC";
  public name: string = "Erika's Victreebel";
  public fullName: string = "Erika's Victreebel ASC 6";
  public text: string = "Erika's Victreebel";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerOwnBench(this, store, state, effect).use(effect, 40);
    }
    return state;
  }
}
