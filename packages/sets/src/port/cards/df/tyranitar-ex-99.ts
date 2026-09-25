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

export class TyranitarEx_99 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Pupitar";
  public hp: number = 150;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Electromark", cost: [], damage: "", text: "Put a Shock-wave marker on 1 of your opponent's Pokémon." },
      { name: "Hyper Claws", cost: [], damage: "70+", text: "If the Defending Pokémon is a Stage 2 Evolved Pokémon, this attack does 70 damage plus 20 more damage." },
      { name: "Shock-wave", cost: [], damage: "", text: "Choose 1 of your opponent's Pokémon that has any Shock-wave markers on it. That Pokémon is Knocked Out." }
  ];
  public set: string = "DF";
  public name: string = "Tyranitar ex δ";
  public fullName: string = "Tyranitar ex δ DF 99";
  public text: string = "Tyranitar ex δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
