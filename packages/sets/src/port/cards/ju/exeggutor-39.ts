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

export class Exeggutor_39 extends PokemonCard {
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
      { name: "Teleport", cost: [], damage: "", text: "Switch Exeggutor with 1 of your Benched Pokémon." },
      { name: "Big Eggsplosion", cost: [], damage: "20×", text: "Flip a number of coins equal to the number of Energy attached to Exeggutor. This attack does 20 damage times the number of heads." }
  ];
  public set: string = "JU";
  public name: string = "Exeggutor";
  public fullName: string = "Exeggutor JU 39";
  public text: string = "Exeggutor";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.switchSelf(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 6, 20);
    }
    return state;
  }
}
