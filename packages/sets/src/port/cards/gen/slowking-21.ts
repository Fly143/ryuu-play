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

export class Slowking_21 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Slowpoke";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Royal Flash", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may flip a coin. If heads, move an Energy from your opponent's Active Pokémon to 1 of his or her Benched Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Psych Up", cost: [], damage: "40", text: "During your next turn, this Pokémon's Psych Up attack does 40 more damage (before applying Weakness and Resistance)." }
  ];
  public set: string = "GEN";
  public name: string = "Slowking";
  public fullName: string = "Slowking GEN 21";
  public text: string = "Slowking";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 0, 0);
    }
    return state;
  }
}
