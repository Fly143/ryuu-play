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

export class Grumpig_32 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Spoink";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Carefree", powerType: PowerType.ABILITY, text: "Grumpig can't be Confused.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hypnoblast", cost: [], damage: "20", text: "The Defending Pokémon is now Asleep." },
      { name: "Extra Ball", cost: [], damage: "50+", text: "If the Defending Pokémon is Pokémon-ex, this attack does 50 damage plus 30 more damage." }
  ];
  public set: string = "DX";
  public name: string = "Grumpig";
  public fullName: string = "Grumpig DX 32";
  public text: string = "Grumpig";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    return state;
  }
}
