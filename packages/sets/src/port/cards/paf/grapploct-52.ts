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

export class Grapploct_52 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Clobbopus";
  public hp: number = 120;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Slow-Acting Syncope", cost: [], damage: "30", text: "At the end of your opponent's next turn, the Defending Pokémon will be Knocked Out." },
      { name: "Mach Cross", cost: [], damage: "120", text: "" }
  ];
  public set: string = "PAF";
  public name: string = "Grapploct";
  public fullName: string = "Grapploct PAF 52";
  public text: string = "Grapploct";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
