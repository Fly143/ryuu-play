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
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class GrapploctSV073 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Clobbopus";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Octolock", cost: [], damage: "", text: "Until this Grapploct leaves the Active Spot, the Defending Pokémon's attacks cost ColorlessColorless more, and the Defending Pokémon can't retreat. This effect can't be applied more than once." },
      { name: "Tough Swing", cost: [], damage: "130", text: "This attack's damage isn't affected by Resistance." }
  ];
  public set: string = "SHF";
  public name: string = "Grapploct";
  public fullName: string = "Grapploct SHF SV073";
  public text: string = "Grapploct";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.ignoreWeaknessResistance(this, store, state, effect).use(effect);
    }
    return state;
  }
}
