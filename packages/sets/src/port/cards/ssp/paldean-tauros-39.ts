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

export class PaldeanTauros_39 extends PokemonCard {
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
      { name: "Upthrusting Horns", cost: [], damage: "30", text: "You may put 2 Energy attached to your opponent's Active Stage 2 Pokémon into their hand." },
      { name: "Jet Headbutt", cost: [], damage: "100", text: "" }
  ];
  public set: string = "SSP";
  public name: string = "Paldean Tauros";
  public fullName: string = "Paldean Tauros SSP 39";
  public text: string = "Paldean Tauros";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
