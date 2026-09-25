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

export class ErikaSIvysaur_41 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Erika's Bulbasaur";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Relaxing Scent", powerType: PowerType.ABILITY, text: "As long as Erika's Ivysaur is your Active Pokémon, whenever an attack (even your own) does damage to any Pokémon (after applying Weakness and Resistance), that attack only does half the damage to that Pokémon (rounded up to the nearest 10). (Any other effects of attacks still happen.) This power stops working while Erika's Ivysaur is Asleep, Confused, or Paralyzed.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Double Razor Leaf", cost: [], damage: "40×", text: "Flip 2 coins. This attack does 40 damage times the number of heads." }
  ];
  public set: string = "G2";
  public name: string = "Erika's Ivysaur";
  public fullName: string = "Erika's Ivysaur G2 41";
  public text: string = "Erika's Ivysaur";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 2, 40);
    }
    return state;
  }
}
