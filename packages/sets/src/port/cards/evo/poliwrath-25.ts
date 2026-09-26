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

export class Poliwrath_25 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Poliwhirl";
  public hp: number = 140;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Dashing Punch", cost: [], damage: "50+", text: "If this Pokémon was on the Bench and became your Active Pokémon this turn, this attack does 50 more damage." },
      { name: "Whirlpool", cost: [], damage: "80", text: "Discard an Energy attached to your opponent's Active Pokémon." }
  ];
  public set: string = "EVO";
  public name: string = "Poliwrath";
  public fullName: string = "Poliwrath EVO 25";
  public text: string = "Poliwrath";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 50, 1);
    }
    return state;
  }
}
