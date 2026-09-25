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

export class GiovanniSNidoking_7 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Giovanni's Nidorino";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Intimidate", cost: [], damage: "", text: "If the Defending Pokémon's maximum HP is 50 or less, it can't attack Giovanni's Nidoking during your opponent's next turn. (Benching or evolving either Pokémon ends this effect.)" },
      { name: "Tumbling Attack", cost: [], damage: "40+", text: "Flip a coin. If heads, this attack does 40 damage plus 30 more damage; if tails, this attack does 40 damage." }
  ];
  public set: string = "G2";
  public name: string = "Giovanni's Nidoking";
  public fullName: string = "Giovanni's Nidoking G2 7";
  public text: string = "Giovanni's Nidoking";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
