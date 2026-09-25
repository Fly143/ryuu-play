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

export class ErikaSExeggcute_77 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Eggsplosion", cost: [], damage: "10×", text: "Flip a number of coins equal to the number of Energy attached to Erika's Exeggcute. This attack does 10 damage times the number of heads." },
      { name: "Psychic", cost: [], damage: "10+", text: "Does 10 damage plus 10 more damage for each Energy card attached to the Defending Pokémon." }
  ];
  public set: string = "G1";
  public name: string = "Erika's Exeggcute";
  public fullName: string = "Erika's Exeggcute G1 77";
  public text: string = "Erika's Exeggcute";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 6, 10);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
