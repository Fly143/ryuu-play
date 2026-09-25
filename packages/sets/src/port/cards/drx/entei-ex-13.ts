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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class EnteiEX_13 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 180;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Fire Fang", cost: [], damage: "30", text: "The Defending Pokémon is now Burned." },
      { name: "Grand Flame", cost: [], damage: "90", text: "Attach a Fire Energy card from your discard pile to 1 of your Benched Pokémon." }
  ];
  public set: string = "DRX";
  public name: string = "Entei-EX";
  public fullName: string = "Entei-EX DRX 13";
  public text: string = "Entei-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.BURNED);
    }
    return state;
  }
}
