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

export class Meowth_88 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Stall", cost: [], damage: "", text: "You can use this attack only if you go second, and only on your first turn. Discard an Energy attached to 1 of your opponent's Pokémon." },
      { name: "Scratch", cost: [], damage: "20", text: "" }
  ];
  public set: string = "STS";
  public name: string = "Meowth";
  public fullName: string = "Meowth STS 88";
  public text: string = "Meowth";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
