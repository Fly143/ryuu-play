import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
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

export class MistySCloyster_29 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Misty's Shellder";
  public hp: number = 70;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Shell Armor", powerType: PowerType.ABILITY, text: "You may reduce all damage done by attacks to Misty's Cloyster by 10 (after applying Weakness and Resistance). (Any other effects of attacks still happen). This power can't be used if Misty's Cloyster is Asleep, Confused, or Paralyzed.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Triple Cannon", cost: [], damage: "20×", text: "Flip 3 coins. This attack does 20 damage times the number of heads." }
  ];
  public set: string = "G1";
  public name: string = "Misty's Cloyster";
  public fullName: string = "Misty's Cloyster G1 29";
  public text: string = "Misty's Cloyster";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 3, 20);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
