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

export class AerodactylVSTAR_93 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Aerodactyl V";
  public hp: number = 260;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Lost Dive", cost: [], damage: "240", text: "Put the top 3 cards of your deck in the Lost Zone." },
      { name: "Ancient Star", cost: [], damage: "", text: "Until this Pokémon leaves play, it gains an Ability that has the effect \"Your opponent's Pokémon V in play, except any Aerodactyl VSTAR, have no Abilities.\" (You can't use more than 1 VSTAR Power in a game.)" }
  ];
  public set: string = "ASR";
  public name: string = "Aerodactyl VSTAR";
  public fullName: string = "Aerodactyl VSTAR ASR 93";
  public text: string = "Aerodactyl VSTAR";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
