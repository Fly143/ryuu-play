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

export class Wishiwashi_46 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 30;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Group Power", powerType: PowerType.ABILITY, text: "If this Pokémon has 3 or more Water Energy attached, it gets +150 HP.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Schooling Shot", cost: [], damage: "30+", text: "This attack does 30 more damage for each basic Energy attached to this Pokémon." }
  ];
  public set: string = "CRE";
  public name: string = "Wishiwashi";
  public fullName: string = "Wishiwashi CRE 46";
  public text: string = "Wishiwashi";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
