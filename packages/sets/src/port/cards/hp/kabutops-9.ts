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

export class Kabutops_92 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Kabuto";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Vital Drain", cost: [], damage: "30", text: "If the Defending Pokémon is Knocked Out by this attack, remove all Special Conditions and 7 damage counters from Kabutops (all if there are less than 7)." },
      { name: "Thunderous Blow", cost: [], damage: "40+", text: "Does 40 damage plus 10 more damage for each Lightning Energy attached to Kabutops." }
  ];
  public set: string = "HP";
  public name: string = "Kabutops δ";
  public fullName: string = "Kabutops δ HP 9";
  public text: string = "Kabutops δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
