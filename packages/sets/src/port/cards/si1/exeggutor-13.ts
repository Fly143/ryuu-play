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

export class Exeggutor_132 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Exeggcute";
  public hp: number = 70;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Sharpshooter", cost: [], damage: "", text: "Choose 1 of your opponent's Pokémon. Flip a number of coins equal to the number of Grass Energy attached to Exeggutor. This attack does 10 damage times the number of heads to that Pokémon. Don't apply Weakness and Resistance." }
  ];
  public set: string = "SI1";
  public name: string = "Exeggutor";
  public fullName: string = "Exeggutor SI1 13";
  public text: string = "Exeggutor";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 8, 10);
    }
    return state;
  }
}
