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

export class Infernape_17 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Monferno";
  public hp: number = 130;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Torment", cost: [], damage: "30", text: "Choose 1 of the Defending Pokémon's attack. That Pokémon can't use that attack during your opponent's next turn." },
      { name: "Malevolent Fire", cost: [], damage: "120", text: "Discard all Energy attached to this Pokémon." }
  ];
  public set: string = "PLB";
  public name: string = "Infernape";
  public fullName: string = "Infernape PLB 17";
  public text: string = "Infernape";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 99);
    }
    return state;
  }
}
