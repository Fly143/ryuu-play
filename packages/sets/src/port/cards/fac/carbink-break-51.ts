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

export class CarbinkBREAK_51 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Carbink";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Diamond Gift", cost: [], damage: "20", text: "Attach 2 Energy cards from your discard pile to 1 of your Fighting Pokémon." }
  ];
  public set: string = "FAC";
  public name: string = "Carbink BREAK";
  public fullName: string = "Carbink BREAK FAC 51";
  public text: string = "Carbink BREAK";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
