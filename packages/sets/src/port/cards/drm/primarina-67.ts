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

export class Primarina_67 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Brionne";
  public hp: number = 150;
    public height?: number = 1.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Harmonics", powerType: PowerType.ABILITY, text: "Whenever you attach an Energy card from your hand to 1 of your Pokémon, except with an attack, Ability, or Trainer card, attach up to 2 Energy cards to that Pokémon instead of 1.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hypno Splash", cost: [], damage: "80", text: "Your opponent's Active Pokémon is now Asleep." }
  ];
  public set: string = "DRM";
  public name: string = "Primarina";
  public fullName: string = "Primarina DRM 67";
  public text: string = "Primarina";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    return state;
  }
}
