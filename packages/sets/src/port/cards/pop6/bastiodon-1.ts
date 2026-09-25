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

export class Bastiodon_1 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Shieldon";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Protective Wall", powerType: PowerType.ABILITY, text: "Prevent all damage done to your Benched Pokémon by your opponent's attacks.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Anger Revenge", cost: [], damage: "60", text: "If Bastiodon was damaged by an attack during your opponent's last turn, this attack does 40 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "POP6";
  public name: string = "Bastiodon";
  public fullName: string = "Bastiodon POP6 1";
  public text: string = "Bastiodon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 40);
    }
    return state;
  }
}
