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

export class Spewpa_9 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Scatterbug";
  public hp: number = 70;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Adaptive Evolution", powerType: PowerType.ABILITY, text: "This Pokémon can evolve during your first turn or the turn you play it.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Bug Bite", cost: [], damage: "30", text: "" }
  ];
  public set: string = "SVI";
  public name: string = "Spewpa";
  public fullName: string = "Spewpa SVI 9";
  public text: string = "Spewpa";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
