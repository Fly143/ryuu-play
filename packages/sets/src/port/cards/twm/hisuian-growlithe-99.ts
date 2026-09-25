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

export class HisuianGrowlithe_99 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Blazing Destruction", cost: [], damage: "", text: "Discard a Stadium in play." },
      { name: "Take Down", cost: [], damage: "40", text: "This Pokémon also does 10 damage to itself." }
  ];
  public set: string = "TWM";
  public name: string = "Hisuian Growlithe";
  public fullName: string = "Hisuian Growlithe TWM 99";
  public text: string = "Hisuian Growlithe";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
