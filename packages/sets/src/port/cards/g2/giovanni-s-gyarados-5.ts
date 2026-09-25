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

export class GiovanniSGyarados_5 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Giovanni's Magikarp";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Summon Storm", cost: [], damage: "", text: "Flip 2 coins. If both of them are heads, this attack does 20 damage to each other Pokémon (even your own). Don't apply Weakness and Resistance for this attack." },
      { name: "Dragon Tornado", cost: [], damage: "40", text: "Unless this attack Knocks Out the Defending Pokémon, choose 1 of your opponent's Benched Pokémon and switch it with the Defending Pokémon." }
  ];
  public set: string = "G2";
  public name: string = "Giovanni's Gyarados";
  public fullName: string = "Giovanni's Gyarados G2 5";
  public text: string = "Giovanni's Gyarados";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.ignoreWeaknessResistance(this, store, state, effect).use(effect);
    }
    return state;
  }
}
