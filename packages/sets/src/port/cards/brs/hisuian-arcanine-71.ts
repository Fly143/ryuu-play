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

export class HisuianArcanine_71 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Hisuian Growlithe";
  public hp: number = 150;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Boulder Crush", cost: [], damage: "50", text: "" },
      { name: "Scorching Horn", cost: [], damage: "80+", text: "If this Pokémon has any Fire Energy attached, this attack does 80 more damage, and your opponent's Active Pokémon is now Burned." }
  ];
  public set: string = "BRS";
  public name: string = "Hisuian Arcanine";
  public fullName: string = "Hisuian Arcanine BRS 71";
  public text: string = "Hisuian Arcanine";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.BURNED);
    }
    return state;
  }
}
