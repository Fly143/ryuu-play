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

export class Wailord_26 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Wailmer";
  public hp: number = 200;
    public height?: number = 14.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Water Cannon", cost: [], damage: "30×", text: "Flip a coin. If heads, this attack does 30 damage times the amount of Water Energy attached to this Pokémon." },
      { name: "Giant Wave", cost: [], damage: "80", text: "This Pokémon can't use Giant Wave during your next turn." }
  ];
  public set: string = "BCR";
  public name: string = "Wailord";
  public fullName: string = "Wailord BCR 26";
  public text: string = "Wailord";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageTimesEnergySelf(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
