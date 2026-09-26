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

export class Rapidash_13 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Ponyta";
  public hp: number = 80;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Fiery Aura", powerType: PowerType.ABILITY, text: "As long as Rapidash is your Active Pokémon, put 4 damage counters instead of 2 on Burned Pokémon between turns.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Searing Flame", cost: [], damage: "10", text: "The Defending Pokémon is now Burned." },
      { name: "Rear Kick", cost: [], damage: "40", text: "" }
  ];
  public set: string = "RG";
  public name: string = "Rapidash";
  public fullName: string = "Rapidash RG 13";
  public text: string = "Rapidash";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.BURNED);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
