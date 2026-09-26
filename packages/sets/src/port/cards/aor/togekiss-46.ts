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

export class Togekiss_46 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Togetic";
  public hp: number = 130;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Serene Grace", powerType: PowerType.ABILITY, text: "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may look at the top 8 cards of your deck. Choose any basic Energy cards you find there and attach them to your Pokémon in any way you like. Shuffle the other cards back into your deck.", useWhenInPlay: true },
      { name: "Δ Evolution", powerType: PowerType.ABILITY, text: "You may play this card from your hand to evolve a Pokémon during your first turn or the turn you play that Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Fairy Wind", cost: [], damage: "60", text: "" }
  ];
  public set: string = "AOR";
  public name: string = "Togekiss";
  public fullName: string = "Togekiss AOR 46";
  public text: string = "Togekiss";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[1]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "earlyEvolution");
    }
    return state;
  }
}
