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

export class Chimecho_22 extends PokemonCard {
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
      { name: "Call In", cost: [], damage: "", text: "Draw a card. If Chingling is anywhere under Chimecho, draw 2 more cards." },
      { name: "Strange Bell", cost: [], damage: "20", text: "If the Defending Pokémon is a Basic Pokémon, that Pokémon is now Confused." }
  ];
  public set: string = "MT";
  public name: string = "Chimecho";
  public fullName: string = "Chimecho MT 22";
  public text: string = "Chimecho";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
