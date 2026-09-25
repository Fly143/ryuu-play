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

export class Xatu_44 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Natu";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Psychic Shift", powerType: PowerType.ABILITY, text: "Once during your turn, if Xatu is on your Bench, you may choose 1 Special Condition from 1 of your Active Pokémon and remove that Special Condition. Then, 1 of the Defending Pokémon is now affected by that Special Condition that you chose.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Energy Singe", cost: [], damage: "", text: "Choose 1 of your opponent's Pokémon. This attack does 20 damage plus 10 more damage for each Energy attached to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "SW";
  public name: string = "Xatu";
  public fullName: string = "Xatu SW 44";
  public text: string = "Xatu";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
