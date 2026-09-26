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

export class UnownQ_49 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 30;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "QUICK", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if Unown Q is on your Bench, you may discard all cards attached to Unown Q and attach Unown Q to 1 of your Pokémon as a Pokémon Tool card. As long as Unown Q is attached to a Pokémon, you pay Colorless less to retreat that Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hidden Power", cost: [], damage: "20", text: "" }
  ];
  public set: string = "LA";
  public name: string = "Unown [Q]";
  public fullName: string = "Unown [Q] LA 49";
  public text: string = "Unown [Q]";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.discardEnergySelfPower(this, store, state, effect).reduce(effect.power, 99);
    }
    return state;
  }
}
