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

export class Volcarona_16 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Larvesta";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Torrid Scales", powerType: PowerType.ABILITY, text: "You must discard a Basic Fire Energy card from your hand in order to use this Ability. Once during your turn, you may make your opponent's Active Pokémon Burned.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Fire Wing", cost: [], damage: "70", text: "" }
  ];
  public set: string = "BLK";
  public name: string = "Volcarona";
  public fullName: string = "Volcarona BLK 16";
  public text: string = "Volcarona";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
