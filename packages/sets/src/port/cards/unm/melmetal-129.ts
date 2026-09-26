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

export class Melmetal_129 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Meltan";
  public hp: number = 150;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Metal Eater", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may discard a Metal Pokémon from your hand. If you do, heal 100 damage from this Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Heavy Impact", cost: [], damage: "130", text: "" }
  ];
  public set: string = "UNM";
  public name: string = "Melmetal";
  public fullName: string = "Melmetal UNM 129";
  public text: string = "Melmetal";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.healSelfPower(this, store, state, effect).reduce(effect.power, 100);
    }
    return state;
  }
}
