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

export class CastformSunnyForm_195 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Singe", cost: [], damage: "", text: "Your opponent's Active Pokémon is now Burned." },
      { name: "Sunny Assist", cost: [], damage: "50", text: "Move all Energy from this Pokémon to 1 of your Benched Pokémon." }
  ];
  public set: string = "SSP";
  public name: string = "Castform Sunny Form";
  public fullName: string = "Castform Sunny Form SSP 195";
  public text: string = "Castform Sunny Form";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.BURNED);
    }
    return state;
  }
}
