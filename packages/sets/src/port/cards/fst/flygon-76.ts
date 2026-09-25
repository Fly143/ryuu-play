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

export class Flygon_76 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Vibrava";
  public hp: number = 150;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Desert Pillar", cost: [], damage: "50×", text: "This attack does 50 damage for each Colorless in your opponent's Active Pokémon's Retreat Cost." },
      { name: "Blasting Wind", cost: [], damage: "110", text: "" }
  ];
  public set: string = "FST";
  public name: string = "Flygon";
  public fullName: string = "Flygon FST 76";
  public text: string = "Flygon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
