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

export class HisuianElectrodeV_172 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 210;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Tantrum Blast", cost: [], damage: "100×", text: "This attack does 100 damage for each Special Condition affecting this Pokémon." },
      { name: "Solar Shot", cost: [], damage: "120", text: "Discard all Energy from this Pokémon." }
  ];
  public set: string = "ASR";
  public name: string = "Hisuian Electrode V";
  public fullName: string = "Hisuian Electrode V ASR 172";
  public text: string = "Hisuian Electrode V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
