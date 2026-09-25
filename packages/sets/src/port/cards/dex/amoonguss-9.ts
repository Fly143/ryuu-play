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

export class Amoonguss_9 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Foongus";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sporprise", powerType: PowerType.ABILITY, text: "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may use this Ability. If you do, your opponent's Active Pokémon is now Confused and Poisoned.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Rising Lunge", cost: [], damage: "20+", text: "Flip a coin. If heads, this attack does 30 more damage." }
  ];
  public set: string = "DEX";
  public name: string = "Amoonguss";
  public fullName: string = "Amoonguss DEX 9";
  public text: string = "Amoonguss";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 30, 1);
    }
    return state;
  }
}
