import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
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

export class Hypno_252 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Drowzee";
  public hp: number = 80;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Eerie Aura", powerType: PowerType.ABILITY, text: "As long as Hypno is your Active Pokémon, put 2 damage counters on each Pokémon that remains Asleep between turns.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hypnotic Ray", cost: [], damage: "20", text: "The Defending Pokémon is now Asleep." }
  ];
  public set: string = "RG";
  public name: string = "Hypno";
  public fullName: string = "Hypno RG 25";
  public text: string = "Hypno";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
