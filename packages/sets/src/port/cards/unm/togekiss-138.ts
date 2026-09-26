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

export class Togekiss_138 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Togetic";
  public hp: number = 140;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Fairy Feast", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may heal 30 damage from each of your Fairy Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Magical Shot", cost: [], damage: "70", text: "" }
  ];
  public set: string = "UNM";
  public name: string = "Togekiss";
  public fullName: string = "Togekiss UNM 138";
  public text: string = "Togekiss";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.healSelfPower(this, store, state, effect).reduce(effect.power, 30);
    }
    return state;
  }
}
