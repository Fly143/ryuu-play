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

export class Chimecho_74 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Dreaming Tone", cost: [], damage: "", text: "During your opponent's next turn, if an Energy card is attached to the Defending Pokémon from your opponent's hand, that Pokémon will be Asleep." },
      { name: "Hang Down", cost: [], damage: "30", text: "" }
  ];
  public set: string = "PGO";
  public name: string = "Chimecho";
  public fullName: string = "Chimecho PGO 74";
  public text: string = "Chimecho";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
