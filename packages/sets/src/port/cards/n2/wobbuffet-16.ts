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

export class Wobbuffet_16 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Counter", cost: [], damage: "", text: "If an attack damages Wobbuffet during your opponent's next turn (even if Wobbuffet is Knocked Out), flip a coin. If heads, Wobbuffet attacks the Defending Pokémon for an equal amount of damage." }
  ];
  public set: string = "N2";
  public name: string = "Wobbuffet";
  public fullName: string = "Wobbuffet N2 16";
  public text: string = "Wobbuffet";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
