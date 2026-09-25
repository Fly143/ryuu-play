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

export class Mew_97 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Lost Link", powerType: PowerType.ABILITY, text: "Mew can use the attacks of all Pokémon in the Lost Zone (both yours and your opponent's). (You still need the necessary Energy to use each attack.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "See Off", cost: [], damage: "", text: "Search your deck for 1 Pokémon and put it in the Lost Zone. Shuffle your deck afterward." }
  ];
  public set: string = "TM";
  public name: string = "Mew";
  public fullName: string = "Mew TM 97";
  public text: string = "Mew";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
