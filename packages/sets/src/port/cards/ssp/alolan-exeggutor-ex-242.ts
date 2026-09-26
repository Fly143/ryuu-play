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

export class AlolanExeggutorEx_242 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Exeggcute";
  public hp: number = 300;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Tropical Frenzy", cost: [], damage: "150", text: "You may attach any number of Basic Energy cards from your hand to your Pokémon in any way you like." },
      { name: "Swinging Sphene", cost: [], damage: "", text: "Flip a coin. If heads, Knock Out your opponent's Active Basic Pokémon. If tails, Knock Out 1 of your opponent's Benched Basic Pokémon." }
  ];
  public set: string = "SSP";
  public name: string = "Alolan Exeggutor ex";
  public fullName: string = "Alolan Exeggutor ex SSP 242";
  public text: string = "Alolan Exeggutor ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
