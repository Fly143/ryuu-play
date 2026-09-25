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

export class Wishiwashi_44 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 30;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Cowardice", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may discard all cards attached to this Pokémon and return it to your hand. You can't use this Ability during your first turn or on the turn this Pokémon was put into play.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Water Gun", cost: [], damage: "10", text: "" }
  ];
  public set: string = "SUM";
  public name: string = "Wishiwashi";
  public fullName: string = "Wishiwashi SUM 44";
  public text: string = "Wishiwashi";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
