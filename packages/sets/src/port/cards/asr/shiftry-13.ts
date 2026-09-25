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

export class Shiftry_132 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Nuzleaf";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Fan Tornado", cost: [], damage: "50", text: "You may have your opponent switch their Active Pokémon with 1 of their Benched Pokémon." },
      { name: "Tearing Gust", cost: [], damage: "210", text: "Put this Pokémon and all attached cards in the Lost Zone." }
  ];
  public set: string = "ASR";
  public name: string = "Shiftry";
  public fullName: string = "Shiftry ASR 13";
  public text: string = "Shiftry";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
