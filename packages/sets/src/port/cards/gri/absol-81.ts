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

export class Absol_81 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Future Sight", cost: [], damage: "", text: "Look at the top 4 cards of either player's deck and put them back in any order." },
      { name: "Doom News", cost: [], damage: "", text: "Put all Energy attached to this Pokémon into your hand. At the end of your opponent's next turn, the Defending Pokémon will be Knocked Out." }
  ];
  public set: string = "GRI";
  public name: string = "Absol";
  public fullName: string = "Absol GRI 81";
  public text: string = "Absol";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
