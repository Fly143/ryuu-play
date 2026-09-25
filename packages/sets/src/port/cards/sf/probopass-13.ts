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

export class Probopass_13 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Nosepass";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Steel Coating", powerType: PowerType.ABILITY, text: "Any damage done to Probopass by your opponent's attacks is reduced by 10 for each Metal Energy attached to Probopass (after applying Weakness and Resistance). You can't reduce more than 20 damage in this way.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Metal Bomber", cost: [], damage: "60", text: "Choose a number of your opponent's Benched Pokémon up to the amount of Metal Energy attached to Probopass. This attack does 20 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "SF";
  public name: string = "Probopass";
  public fullName: string = "Probopass SF 13";
  public text: string = "Probopass";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.reduceDamageSelfPower(this, store, state, effect).reduce(effect.power, 10);
    }
    return state;
  }
}
