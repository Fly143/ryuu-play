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

export class IceRiderCalyrexVMAX_202 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Ice Rider Calyrex V";
  public hp: number = 320;
    public height?: number = 2.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Ride of the High King", cost: [], damage: "10+", text: "This attack does 30 more damage for each of your opponent's Benched Pokémon." },
      { name: "Max Lance", cost: [], damage: "10+", text: "You may discard up to 2 Energy from this Pokémon. If you do, this attack does 120 more damage for each card you discarded in this way." }
  ];
  public set: string = "BST";
  public name: string = "Ice Rider Calyrex VMAX";
  public fullName: string = "Ice Rider Calyrex VMAX BST 202";
  public text: string = "Ice Rider Calyrex VMAX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerOpponentBench(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 120, 0);
    }
    return state;
  }
}
