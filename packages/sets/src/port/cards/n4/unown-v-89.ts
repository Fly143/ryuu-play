import {
  Effect,
  State,
  StoreLike,
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

export class UnownV_89 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "[Vanish]", powerType: PowerType.ABILITY, text: "When you play Unown [V] from your hand, you may flip a coin. If heads, return 1 of your Pokémon with Unown in its name (other than Unown [V]) to your hand. (Discard all cards attached to that card.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hidden Power", cost: [], damage: "10", text: "" }
  ];
  public set: string = "N4";
  public name: string = "Unown [V]";
  public fullName: string = "Unown [V] N4 89";
  public text: string = "Unown [V]";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.discardEnergySelfPower(this, store, state, effect).reduce(effect.power, 99);
    }
    return state;
  }
}
