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

export class Suicune_14 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Crystal Body", powerType: PowerType.ABILITY, text: "Prevent all effects of your opponent's attacks, other than damage, done to Suicune. This power stops working while Suicune is Asleep, Confused, or Paralyzed.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Aurora Wave", cost: [], damage: "30", text: "Flip 2 coins. If both are heads, the Defending Pokémon is now Paralyzed. If only 1 is heads, the Defending Pokémon is now Asleep." }
  ];
  public set: string = "N3";
  public name: string = "Suicune";
  public fullName: string = "Suicune N3 14";
  public text: string = "Suicune";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
