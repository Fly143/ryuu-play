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

export class Tyranitar_40 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Pupitar";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Destructive Roar", cost: [], damage: "", text: "Flip a coin. If heads, discard 1 Energy card attached to 1 of your opponent's Pokémon." },
      { name: "Tail Slap", cost: [], damage: "30", text: "" },
      { name: "Gigacrush", cost: [], damage: "60", text: "Each player discards the top 3 cards from his or her deck." }
  ];
  public set: string = "AQ";
  public name: string = "Tyranitar";
  public fullName: string = "Tyranitar AQ 40";
  public text: string = "Tyranitar";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
