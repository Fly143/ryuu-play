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

export class HisuianTyphlosion_52 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Quilava";
  public hp: number = 150;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Supernatural Orb", powerType: PowerType.ABILITY, text: "You must discard a Psychic Energy card from your hand in order to use this Ability. Once during your turn, you may make your opponent's Active Pokémon Burned and Confused.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Shadow Bind", cost: [], damage: "90", text: "During your opponent's next turn, the Defending Pokémon can't retreat." }
  ];
  public set: string = "BRS";
  public name: string = "Hisuian Typhlosion";
  public fullName: string = "Hisuian Typhlosion BRS 52";
  public text: string = "Hisuian Typhlosion";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
