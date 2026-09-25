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

export class Manaphy_24 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Ocean Search", powerType: PowerType.ABILITY, text: "Once during your turn, if this Pokémon is in the Active Spot, you may look at the top 6 cards of your deck, reveal a Pokémon you find there, and put it into your hand. Shuffle the other cards back into your deck.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Wave Splash", cost: [], damage: "30", text: "" }
  ];
  public set: string = "SHF";
  public name: string = "Manaphy";
  public fullName: string = "Manaphy SHF 24";
  public text: string = "Manaphy";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "pokedex");
    }
    return state;
  }
}
