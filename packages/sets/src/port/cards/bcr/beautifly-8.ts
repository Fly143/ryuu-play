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

export class Beautifly_8 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Silcoon";
  public hp: number = 120;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Triple Energy", cost: [], damage: "", text: "Search your deck for 3 different types of basic Energy cards and attach them to your Pokémon in any way you like. Shuffle your deck afterward." },
      { name: "Drainpour", cost: [], damage: "40", text: "Heal 40 damage from each of your Benched Pokémon." }
  ];
  public set: string = "BCR";
  public name: string = "Beautifly";
  public fullName: string = "Beautifly BCR 8";
  public text: string = "Beautifly";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.searchEnergyToSelf(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 40);
    }
    return state;
  }
}
