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

export class Staraptor_147 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Staravia";
  public hp: number = 150;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Hurricane Blender", cost: [], damage: "70", text: "Move any amount of Energy from your Pokémon to your other Pokémon in any way you like." },
      { name: "Brave Bird", cost: [], damage: "170", text: "This Pokémon also does 30 damage to itself." }
  ];
  public set: string = "DAA";
  public name: string = "Staraptor";
  public fullName: string = "Staraptor DAA 147";
  public text: string = "Staraptor";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
