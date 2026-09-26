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

export class Dudunsparce_157 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Dunsparce";
  public hp: number = 140;
    public height?: number = 5.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Mud-Slap", cost: [], damage: "30", text: "" },
      { name: "Dig Away Flash", cost: [], damage: "100", text: "Your opponent's Active Pokémon is now Paralyzed. Shuffle this Pokémon and all attached cards into your deck." }
  ];
  public set: string = "PAL";
  public name: string = "Dudunsparce";
  public fullName: string = "Dudunsparce PAL 157";
  public text: string = "Dudunsparce";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.PARALYZED);
    }
    return state;
  }
}
