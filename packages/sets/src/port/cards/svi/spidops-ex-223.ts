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

export class SpidopsEx_223 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Tarountula";
  public hp: number = 260;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Trap Territory", powerType: PowerType.ABILITY, text: "Your opponent's Active Pokémon's Retreat Cost is Colorless more.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Wire Hang", cost: [], damage: "90+", text: "This attack does 30 more damage for each Colorless in your opponent's Active Pokémon's Retreat Cost." }
  ];
  public set: string = "SVI";
  public name: string = "Spidops ex";
  public fullName: string = "Spidops ex SVI 223";
  public text: string = "Spidops ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 30, 0);
    }
    return state;
  }
}
