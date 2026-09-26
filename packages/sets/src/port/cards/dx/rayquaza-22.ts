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

export class Rayquaza_22 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
    public height?: number = 3.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dragon Aura", powerType: PowerType.ABILITY, text: "As long as Rayquaza has any basic Fire Energy cards and any basic Lightning Energy cards attached to it, prevent all effects, except damage, by an opponent's attack done to Rayquaza.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Tumbling Attack", cost: [], damage: "20+", text: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage." }
  ];
  public set: string = "DX";
  public name: string = "Rayquaza";
  public fullName: string = "Rayquaza DX 22";
  public text: string = "Rayquaza";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
