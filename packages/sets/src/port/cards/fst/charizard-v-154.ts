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

export class CharizardV_154 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 220;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Incinerate", cost: [], damage: "90", text: "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon." },
      { name: "Heat Blast", cost: [], damage: "180", text: "" }
  ];
  public set: string = "FST";
  public name: string = "Charizard V";
  public fullName: string = "Charizard V FST 154";
  public text: string = "Charizard V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
