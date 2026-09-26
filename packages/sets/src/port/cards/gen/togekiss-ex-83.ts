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

export class TogekissEX_83 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 170;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Mighty Wind", cost: [], damage: "20", text: "You may attach an Energy card from your hand to 1 of your Benched Pokémon." },
      { name: "Hurricane Wing", cost: [], damage: "50×", text: "Flip 4 coins. This attack does 50 damage times the number of heads." }
  ];
  public set: string = "GEN";
  public name: string = "Togekiss-EX";
  public fullName: string = "Togekiss-EX GEN 83";
  public text: string = "Togekiss-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 4, 50);
    }
    return state;
  }
}
