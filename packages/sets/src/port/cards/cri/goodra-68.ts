import {
  Effect,
  State,
  StoreLike,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class Goodra_68 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Sliggoo";
  public hp: number = 160;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Slimy Sliding", powerType: PowerType.ABILITY, text: "When your opponent's Active Pokémon retreats, your opponent flips a coin. If tails, Energy for its Retreat Cost is not discarded, and they don't switch Pokémon. The effect of Slimy Sliding doesn't stack.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Dragon Pulse", cost: [], damage: "160", text: "Discard the top card of your deck." }
  ];
  public set: string = "CRI";
  public name: string = "Goodra";
  public fullName: string = "Goodra CRI 68";
  public text: string = "Goodra";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
