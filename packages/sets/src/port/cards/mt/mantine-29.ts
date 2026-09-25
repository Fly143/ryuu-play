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

export class Mantine_29 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Jumbo Fin", powerType: PowerType.ABILITY, text: "If Mantyke is anywhere under Mantine, the Retreat Cost for each of your Water Pokémon is ColorlessColorless less.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Giant Wave", cost: [], damage: "50", text: "Mantine can't use Giant Wave during your next turn." }
  ];
  public set: string = "MT";
  public name: string = "Mantine";
  public fullName: string = "Mantine MT 29";
  public text: string = "Mantine";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
