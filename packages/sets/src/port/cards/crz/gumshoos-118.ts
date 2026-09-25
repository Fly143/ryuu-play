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

export class Gumshoos_118 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Yungoos";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Stakeout Headbutt", cost: [], damage: "30+", text: "If your opponent's Active Pokémon moved from the Bench to the Active Spot during your opponent's last turn, this attack does 120 more damage." },
      { name: "Lunge Out", cost: [], damage: "60", text: "" }
  ];
  public set: string = "CRZ";
  public name: string = "Gumshoos";
  public fullName: string = "Gumshoos CRZ 118";
  public text: string = "Gumshoos";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 120, 1);
    }
    return state;
  }
}
