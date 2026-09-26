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

export class Granbull_138 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Snubbull";
  public hp: number = 130;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "All Out", cost: [], damage: "30+", text: "If you have no cards in your hand, this attack does 130 more damage." },
      { name: "Giant Fangs", cost: [], damage: "110", text: "" }
  ];
  public set: string = "DRM";
  public name: string = "Granbull";
  public fullName: string = "Granbull DRM 138";
  public text: string = "Granbull";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 130, 1);
    }
    return state;
  }
}
