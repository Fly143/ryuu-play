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

export class Glaceon_23 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Eevee";
  public hp: number = 90;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Freeze Zone", powerType: PowerType.ABILITY, text: "The Retreat Cost of each of your Team Plasma Pokémon in play is ColorlessColorless less.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Icy Wind", cost: [], damage: "60", text: "The Defending Pokémon is now Asleep." }
  ];
  public set: string = "FLF";
  public name: string = "Glaceon";
  public fullName: string = "Glaceon FLF 23";
  public text: string = "Glaceon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    return state;
  }
}
