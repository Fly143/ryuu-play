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

export class Phione_30 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Murmurs of the Sea", powerType: PowerType.ABILITY, text: "Your Water Pokémon can't be Confused. If those Pokémon are already Confused, remove that Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Water Pulse", cost: [], damage: "30", text: "Your opponent's Active Pokémon is now Asleep." }
  ];
  public set: string = "DRM";
  public name: string = "Phione";
  public fullName: string = "Phione DRM 30";
  public text: string = "Phione";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    return state;
  }
}
