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

export class PaldeanTauros_101 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Smash Kick", cost: [], damage: "40", text: "" },
      { name: "Blocking Stomp", cost: [], damage: "90", text: "If the Defending Pokémon is a Basic Pokémon, it can't attack during your opponent's next turn." }
  ];
  public set: string = "SSP";
  public name: string = "Paldean Tauros";
  public fullName: string = "Paldean Tauros SSP 101";
  public text: string = "Paldean Tauros";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
