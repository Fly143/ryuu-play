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

export class Coalossal_95 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Carkol";
  public hp: number = 180;
    public height?: number = 2.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Gatling Tar", cost: [], damage: "40+", text: "This attack does 80 more damage for each Fire Energy attached to this Pokémon." },
      { name: "Cragalanche", cost: [], damage: "150", text: "Discard the top 2 cards of your opponent's deck." }
  ];
  public set: string = "TEF";
  public name: string = "Coalossal";
  public fullName: string = "Coalossal TEF 95";
  public text: string = "Coalossal";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 80);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.millOpponent(this, store, state, effect).use(effect, 2);
    }
    return state;
  }
}
