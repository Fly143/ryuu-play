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

export class Vanilluxe_47 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Vanillish";
  public hp: number = 150;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Bitter Cold", powerType: PowerType.ABILITY, text: "Once during your turn, if this Pokémon is in the Active Spot, you may flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Frost Smash", cost: [], damage: "90", text: "" }
  ];
  public set: string = "DAA";
  public name: string = "Vanilluxe";
  public fullName: string = "Vanilluxe DAA 47";
  public text: string = "Vanilluxe";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "flipHeadsSpecial:CONFUSED");
    }
    return state;
  }
}
