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

export class Clefairy_62 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Moon-Watching Party", powerType: PowerType.ABILITY, text: "Once during your turn, if this Pokémon is in the Active Spot, for each of your Benched Clefairy, you may search your deck for a Psychic Energy card and attach it to that Clefairy. Then, shuffle your deck.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Wonder Storm", cost: [], damage: "20×", text: "This attack does 20 damage for each Psychic Energy attached to all of your Pokémon." }
  ];
  public set: string = "ASR";
  public name: string = "Clefairy";
  public fullName: string = "Clefairy ASR 62";
  public text: string = "Clefairy";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
