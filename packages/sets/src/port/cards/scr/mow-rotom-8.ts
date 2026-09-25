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

export class MowRotom_8 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Reaping Dash", cost: [], damage: "30", text: "Before doing damage, discard all Pokémon Tools and Special Energy from your opponent's Active Pokémon." }
  ];
  public set: string = "SCR";
  public name: string = "Mow Rotom";
  public fullName: string = "Mow Rotom SCR 8";
  public text: string = "Mow Rotom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
