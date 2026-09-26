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

export class Forretress_60 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Pineco";
  public hp: number = 100;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Thorn Tempest", powerType: PowerType.ABILITY, text: "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may put 1 damage counter on each of your opponent's Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Iron Crash", cost: [], damage: "20+", text: "This attack does 20 more damage for each Colorless in your opponent's Active Pokémon's Retreat Cost." }
  ];
  public set: string = "FLF";
  public name: string = "Forretress";
  public fullName: string = "Forretress FLF 60";
  public text: string = "Forretress";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 20, 0);
    }
    return state;
  }
}
