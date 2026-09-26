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

export class Goodra_197 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Sliggoo";
  public hp: number = 160;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Slimy Room", powerType: PowerType.ABILITY, text: "As long as this Pokémon is in the Active Spot, whenever your opponent tries to attach an Energy card from their hand to a Pokémon, they must flip a coin. If tails, your opponent discards that Energy card instead of attaching it, and this doesn't use up their Energy attachment for the turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Buster Tail", cost: [], damage: "120", text: "" }
  ];
  public set: string = "EVS";
  public name: string = "Goodra";
  public fullName: string = "Goodra EVS 197";
  public text: string = "Goodra";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
