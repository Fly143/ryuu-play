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

export class BlazikenFBLVX_142 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Blaziken FB";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Burning Spirit", powerType: PowerType.ABILITY, text: "Any damage done by attacks to a Burned Pokémon (both yours and your opponent's) is increased by 40 (after applying Weakness and Resistance). No more than 40 damage can be added by all Burning Spirit Poké-Bodies.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Jet Shoot", cost: [], damage: "80", text: "During your opponent's next turn, any damage done to Blaziken FB by attacks is increased by 40 (after applying Weakness and Resistance)." }
  ];
  public set: string = "SV";
  public name: string = "Blaziken FB LV.X";
  public fullName: string = "Blaziken FB LV.X SV 142";
  public text: string = "Blaziken FB LV.X";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.selfReduceDamageNextTurn(this, store, state, effect).use(effect, 40);
    }
    return state;
  }
}
