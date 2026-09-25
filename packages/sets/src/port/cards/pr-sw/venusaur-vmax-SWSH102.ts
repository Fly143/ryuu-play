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

export class VenusaurVMAXSWSH102 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Venusaur V";
  public hp: number = 330;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Forest Storm", cost: [], damage: "30×", text: "This attack does 30 damage for each Grass Energy attached to all of your Pokémon." },
      { name: "G-Max Bloom", cost: [], damage: "210", text: "Heal 30 damage from this Pokémon." }
  ];
  public set: string = "PR-SW";
  public name: string = "Venusaur VMAX";
  public fullName: string = "Venusaur VMAX PR-SW SWSH102";
  public text: string = "Venusaur VMAX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
