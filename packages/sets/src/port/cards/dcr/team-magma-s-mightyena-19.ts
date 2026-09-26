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

export class TeamMagmaSMightyena_19 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Team Magma's Poochyena";
  public hp: number = 100;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Bite", cost: [], damage: "30", text: "" },
      { name: "Hostile Fang", cost: [], damage: "80", text: "If your opponent's Active Pokémon is a Team Aqua Pokémon, this attack does 40 more damage." }
  ];
  public set: string = "DCR";
  public name: string = "Team Magma's Mightyena";
  public fullName: string = "Team Magma's Mightyena DCR 19";
  public text: string = "Team Magma's Mightyena";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 40, 1);
    }
    return state;
  }
}
