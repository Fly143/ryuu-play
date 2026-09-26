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

export class Toxapex_69 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Mareanie";
  public hp: number = 120;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Poison Sting", cost: [], damage: "", text: "Your opponent's Active Pokémon is now Poisoned." },
      { name: "Venom Fever", cost: [], damage: "50×", text: "If your opponent's Active Pokémon is Poisoned, this attack does 50 damage for each damage counter on that Pokémon." }
  ];
  public set: string = "DRM";
  public name: string = "Toxapex";
  public fullName: string = "Toxapex DRM 69";
  public text: string = "Toxapex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    return state;
  }
}
