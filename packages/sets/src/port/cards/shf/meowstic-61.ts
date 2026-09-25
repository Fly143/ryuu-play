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

export class Meowstic_61 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Espurr";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Ear Moves", powerType: PowerType.ABILITY, text: "Once during your turn, you may move 1 damage counter from 1 of your Pokémon to 1 of your opponent's Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Psychic Sphere", cost: [], damage: "50", text: "" }
  ];
  public set: string = "SHF";
  public name: string = "Meowstic";
  public fullName: string = "Meowstic SHF 61";
  public text: string = "Meowstic";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "moveDamageCounters");
    }
    return state;
  }
}
