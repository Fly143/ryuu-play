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

export class Rapidash_8 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Ponyta";
  public hp: number = 90;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Fiery Spirit", powerType: PowerType.ABILITY, text: "Rapidash can't be Confused.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Ring of Fire", cost: [], damage: "50", text: "The Defending Pokémon is now Burned and can't retreat during your opponent's next turn." }
  ];
  public set: string = "TM";
  public name: string = "Rapidash";
  public fullName: string = "Rapidash TM 8";
  public text: string = "Rapidash";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
