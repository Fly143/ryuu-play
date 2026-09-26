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

export class Medicham_25 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Meditite";
  public hp: number = 80;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dual Armor", powerType: PowerType.ABILITY, text: "As long as Medicham has any Psychic Energy cards attached to it, Medicham is both Psychic and Fighting type.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Psyshock", cost: [], damage: "20", text: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed." },
      { name: "Sky Uppercut", cost: [], damage: "50", text: "This attack's damage isn't affected by Resistance." }
  ];
  public set: string = "CG";
  public name: string = "Medicham";
  public fullName: string = "Medicham CG 25";
  public text: string = "Medicham";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.PARALYZED);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.ignoreWeaknessResistance(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
