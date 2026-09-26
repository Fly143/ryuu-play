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

export class MSalamenceEXXY171 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Salamence-EX";
  public hp: number = 230;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Savage Wing", cost: [], damage: "100+", text: "Discard as many basic Fire Energy attached to this Pokémon as you like. This attack does 40 more damage for each Energy card you discarded in this way." }
  ];
  public set: string = "PR-XY";
  public name: string = "M Salamence-EX";
  public fullName: string = "M Salamence-EX PR-XY XY171";
  public text: string = "M Salamence-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 40, 0);
    }
    return state;
  }
}
