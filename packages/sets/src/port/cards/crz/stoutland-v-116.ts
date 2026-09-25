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

export class StoutlandV_116 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 210;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Double Dip Fangs", cost: [], damage: "40", text: "If your opponent's Basic Pokémon is Knocked Out by damage from this attack, take 1 more Prize card." },
      { name: "Wild Tackle", cost: [], damage: "200", text: "This Pokémon also does 30 damage to itself." }
  ];
  public set: string = "CRZ";
  public name: string = "Stoutland V";
  public fullName: string = "Stoutland V CRZ 116";
  public text: string = "Stoutland V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, -30, 1);
    }
    return state;
  }
}
