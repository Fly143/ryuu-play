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

export class Mightyena_96 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Poochyena";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Hustle Bark", powerType: PowerType.ABILITY, text: "If your opponent has any Pokémon VMAX in play, this Pokémon's attacks cost ColorlessColorlessColorless less.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Wild Tackle", cost: [], damage: "160", text: "This Pokémon also does 50 damage to itself." }
  ];
  public set: string = "BRS";
  public name: string = "Mightyena";
  public fullName: string = "Mightyena BRS 96";
  public text: string = "Mightyena";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 50);
    }
    return state;
  }
}
