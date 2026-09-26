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

export class HisuianSliggoo_133 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Goomy";
  public hp: number = 90;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rigidify", cost: [], damage: "", text: "During your opponent's next turn, this Pokémon takes 50 less damage from attacks (after applying Weakness and Resistance)." },
      { name: "Gentle Slap", cost: [], damage: "40", text: "" }
  ];
  public set: string = "ASR";
  public name: string = "Hisuian Sliggoo";
  public fullName: string = "Hisuian Sliggoo ASR 133";
  public text: string = "Hisuian Sliggoo";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.reduceDamageNextTurn(this, store, state, effect).use(effect, 50);
    }
    return state;
  }
}
