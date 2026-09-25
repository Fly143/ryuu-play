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

export class GliscorDP36 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Gligar";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Bind Eye", powerType: PowerType.ABILITY, text: "As long as Gliscor is your Active Pokémon, your opponent can't remove any Special Conditions by evolving or devolving his or her Pokémon. (This also includes putting a Pokémon Level-Up card onto that Pokémon.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Cutting Turn", cost: [], damage: "", text: "Flip a coin. If heads, put damage counters on the Defending Pokémon until it is 10HP away from being Knocked Out. If you do, shuffle Gliscor and all cards attached to it back into your deck." },
      { name: "Friction Heat", cost: [], damage: "20", text: "The Defending Pokémon is now Burned." }
  ];
  public set: string = "PR-DPP";
  public name: string = "Gliscor";
  public fullName: string = "Gliscor PR-DPP DP36";
  public text: string = "Gliscor";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.BURNED);
    }
    return state;
  }
}
