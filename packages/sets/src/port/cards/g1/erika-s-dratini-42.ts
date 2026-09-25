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

export class ErikaSDratini_42 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Strange Barrier", powerType: PowerType.ABILITY, text: "Whenever an attack by a Basic Pokémon (including your own) does 20 or more damage to Erika's Dratini (after applying Weakness and Resistance), reduce that damage to 10. (Any other effects of attacks still happen.) This power stops working while Erika's Dratini is Asleep, Confused, or Paralyzed.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Tail Strike", cost: [], damage: "10+", text: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage." }
  ];
  public set: string = "G1";
  public name: string = "Erika's Dratini";
  public fullName: string = "Erika's Dratini G1 42";
  public text: string = "Erika's Dratini";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
