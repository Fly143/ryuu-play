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

export class ErikaSVileplume_5 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Erika's Gloom";
  public hp: number = 80;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Pollen Defense", powerType: PowerType.ABILITY, text: "If an attack does damage to Erika's Vileplume while it's your Active Pokémon (even if it's Knocked Out), flip a coin. If heads, your opponent's Active Pokémon is now Confused. This power works even while Erika's Vileplume is Asleep, Confused, or Paralyzed.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Mega Drain", cost: [], damage: "30", text: "If Erika's Vileplume does damage to the Defending Pokémon (after applying Weakness and Resistance), remove a number of damage counters from Erika's Vileplume equal to half the damage done to the Defending Pokémon (rounded up to the nearest 10). If Erika's Vileplume has fewer damage counters than that, remove all of them." }
  ];
  public set: string = "G1";
  public name: string = "Erika's Vileplume";
  public fullName: string = "Erika's Vileplume G1 5";
  public text: string = "Erika's Vileplume";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "healHalfDamageDone");
    }
    return state;
  }
}
