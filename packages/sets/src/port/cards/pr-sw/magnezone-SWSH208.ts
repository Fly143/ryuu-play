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

export class MagnezoneSWSH208 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Magneton";
  public hp: number = 150;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Giga Magnet", powerType: PowerType.ABILITY, text: "Once during your turn, you may look at the top 6 cards of your deck and attach any number of Metal Energy cards you find there to your Pokémon in any way you like. Shuffle the other cards back into your deck.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Power Beam", cost: [], damage: "120", text: "" }
  ];
  public set: string = "PR-SW";
  public name: string = "Magnezone";
  public fullName: string = "Magnezone PR-SW SWSH208";
  public text: string = "Magnezone";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "pokedex");
    }
    return state;
  }
}
