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

export class AlolanGeodude_40 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rock Polish", cost: [], damage: "", text: "During your next turn, this Pokémon has no Retreat Cost." },
      { name: "Rollout", cost: [], damage: "40", text: "" }
  ];
  public set: string = "GRI";
  public name: string = "Alolan Geodude";
  public fullName: string = "Alolan Geodude GRI 40";
  public text: string = "Alolan Geodude";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "auraNoRetreatCost");
    }
    return state;
  }
}
