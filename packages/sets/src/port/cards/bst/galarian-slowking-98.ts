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

export class GalarianSlowking_98 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Galarian Slowpoke";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Mysterious Potion", powerType: PowerType.ABILITY, text: "Once during your turn, you may choose 1 of your Pokémon and flip a coin. If heads, heal 90 damage from that Pokémon. If tails, put 3 damage counters on that Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Spray Fluid", cost: [], damage: "90", text: "" }
  ];
  public set: string = "BST";
  public name: string = "Galarian Slowking";
  public fullName: string = "Galarian Slowking BST 98";
  public text: string = "Galarian Slowking";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.healSelfPower(this, store, state, effect).reduce(effect.power, 90);
    }
    return state;
  }
}
