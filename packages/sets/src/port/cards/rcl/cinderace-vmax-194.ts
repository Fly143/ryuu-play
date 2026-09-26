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

export class CinderaceVMAX_194 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Cinderace V";
  public hp: number = 320;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Counter", cost: [], damage: "30+", text: "If this Pokémon was damaged by an attack during your opponent's last turn, this attack does that much more damage." },
      { name: "Max Pyro Ball", cost: [], damage: "170", text: "Your opponent's Active Pokémon is now Burned." }
  ];
  public set: string = "RCL";
  public name: string = "Cinderace VMAX";
  public fullName: string = "Cinderace VMAX RCL 194";
  public text: string = "Cinderace VMAX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.BURNED);
    }
    return state;
  }
}
