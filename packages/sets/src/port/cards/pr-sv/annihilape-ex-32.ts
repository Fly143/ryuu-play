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

export class AnnihilapeEx_32 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Primeape";
  public hp: number = 320;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Angry Grudge", cost: [], damage: "20×", text: "Put up to 12 damage counters on this Pokémon. This attack does 20 damage for each damage counter you placed in this way." },
      { name: "Seismic Toss", cost: [], damage: "150", text: "" }
  ];
  public set: string = "PR-SV";
  public name: string = "Annihilape ex";
  public fullName: string = "Annihilape ex PR-SV 32";
  public text: string = "Annihilape ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
