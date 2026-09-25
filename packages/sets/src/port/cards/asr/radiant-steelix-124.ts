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

export class RadiantSteelix_124 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 170;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Energy Stream", cost: [], damage: "20", text: "Attach up to 2 Metal Energy cards from your discard pile to this Pokémon." },
      { name: "Destructive Finish", cost: [], damage: "60+", text: "Discard cards from the top of your deck until only 1 card remains. This attack does 30 more damage for each Energy card you discarded in this way." }
  ];
  public set: string = "ASR";
  public name: string = "Radiant Steelix";
  public fullName: string = "Radiant Steelix ASR 124";
  public text: string = "Radiant Steelix";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 30, 0);
    }
    return state;
  }
}
