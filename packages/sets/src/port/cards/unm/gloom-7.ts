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

export class Gloom_7 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Oddish";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Irresistible Aroma", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if your opponent's Bench isn't full, you may flip a coin. If heads, your opponent reveals their hand. Put a Basic Pokémon you find there onto their Bench.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Drool", cost: [], damage: "30", text: "" }
  ];
  public set: string = "UNM";
  public name: string = "Gloom";
  public fullName: string = "Gloom UNM 7";
  public text: string = "Gloom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
