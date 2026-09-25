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

export class SylveonEx_86 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Eevee";
  public hp: number = 270;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Magical Charm", cost: [], damage: "160", text: "During your opponent's next turn, attacks used by the Defending Pokémon do 100 less damage (before applying Weakness and Resistance)." },
      { name: "Angelite", cost: [], damage: "", text: "Choose 2 of your opponent's Benched Pokémon. Shuffle those Pokémon and all attached cards into your opponent's deck. If 1 of your Pokémon used Angelite during your last turn, this attack can't be used." }
  ];
  public set: string = "SSP";
  public name: string = "Sylveon ex";
  public fullName: string = "Sylveon ex SSP 86";
  public text: string = "Sylveon ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
