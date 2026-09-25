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

export class RaichuAlolanRaichuGX_221 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 260;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Tandem Shock", cost: [], damage: "80+", text: "If this Pokémon was on the Bench and became your Active Pokémon this turn, this attack does 80 more damage, and your opponent's Active Pokémon is now Paralyzed." },
      { name: "Lightning Ride-GX", cost: [], damage: "150+", text: "Switch this Pokémon with 1 of your Benched Pokémon. If this Pokémon has at least 2 extra Lightning Energy attached to it (in addition to this attack's cost), this attack does 100 more damage. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "CEC";
  public name: string = "Raichu & Alolan Raichu-GX";
  public fullName: string = "Raichu & Alolan Raichu-GX CEC 221";
  public text: string = "Raichu & Alolan Raichu-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.PARALYZED);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.switchSelf(this, store, state, effect).use(effect);
    }
    return state;
  }
}
