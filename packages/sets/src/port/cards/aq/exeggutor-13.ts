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

export class Exeggutor_13 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Exeggcute";
  public hp: number = 80;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Big Eggsplosion", cost: [], damage: "20×", text: "Flip a number of coins equal to the amount of Energy attached to Exeggutor. This attack does 20 damage times the number of heads." },
      { name: "Lateral Eggsplosion", cost: [], damage: "30+", text: "Flip a number of coins equal to the amount of Energy attached to all of of your Benched Pokémon. This attack does 30 damage plus 10 more damage for each heads." }
  ];
  public set: string = "AQ";
  public name: string = "Exeggutor";
  public fullName: string = "Exeggutor AQ 13";
  public text: string = "Exeggutor";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
