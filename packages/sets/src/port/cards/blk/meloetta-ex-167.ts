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

export class MeloettaEx_167 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 200;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Debut Performance", powerType: PowerType.ABILITY, text: "If you go first, this Pokémon can use attacks during your first turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Echoed Voice", cost: [], damage: "30", text: "During your next turn, this Pokémon's Echoed Voice attack does 80 more damage (before applying Weakness and Resistance)." }
  ];
  public set: string = "BLK";
  public name: string = "Meloetta ex";
  public fullName: string = "Meloetta ex BLK 167";
  public text: string = "Meloetta ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 0, 0);
    }
    return state;
  }
}
