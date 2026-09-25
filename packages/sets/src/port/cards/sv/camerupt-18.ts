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

export class Camerupt_18 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Numel";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Moving Fire", cost: [], damage: "30", text: "You may move a Fire Energy card attached to 1 of your Benched Pokémon to Camerupt." },
      { name: "Volcanic Crash", cost: [], damage: "100", text: "Flip 3 coins. For each tails, discard the top card of your deck. Ignore this effect if your opponent has any Water Pokémon in play." }
  ];
  public set: string = "SV";
  public name: string = "Camerupt";
  public fullName: string = "Camerupt SV 18";
  public text: string = "Camerupt";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
