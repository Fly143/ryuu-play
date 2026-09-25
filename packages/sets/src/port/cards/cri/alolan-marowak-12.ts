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

export class AlolanMarowak_12 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Cubone";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Dance of Flames", cost: [], damage: "", text: "For each Energy attached to your opponent's Pokémon, attach a Fire Energy card from your discard pile to your Pokémon in any way you like." },
      { name: "Burning Bonemerang", cost: [], damage: "70×", text: "Flip 2 coins. This attack does 70 damage for each heads. If either of them is heads, your opponent's Active Pokémon is now Burned." }
  ];
  public set: string = "CRI";
  public name: string = "Alolan Marowak";
  public fullName: string = "Alolan Marowak CRI 12";
  public text: string = "Alolan Marowak";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 2, 70);
    }
    return state;
  }
}
