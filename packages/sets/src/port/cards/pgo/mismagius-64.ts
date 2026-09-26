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

export class Mismagius_64 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Misdreavus";
  public hp: number = 90;
    public height?: number = 0.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Spiteful Magic", powerType: PowerType.ABILITY, text: "If this Pokémon has full HP and is Knocked Out by damage from an attack from your opponent's Pokémon, put 8 damage counters on the Attacking Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Eerie Voice", cost: [], damage: "", text: "Put 2 damage counters on each of your opponent's Pokémon." }
  ];
  public set: string = "PGO";
  public name: string = "Mismagius";
  public fullName: string = "Mismagius PGO 64";
  public text: string = "Mismagius";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.putCountersEachOpponent(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
