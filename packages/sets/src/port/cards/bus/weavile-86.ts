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

export class Weavile_86 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Sneasel";
  public hp: number = 90;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rule of Evil", cost: [], damage: "", text: "This attack does 60 damage to each Pokémon that has an Ability (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Slash", cost: [], damage: "70", text: "" }
  ];
  public set: string = "BUS";
  public name: string = "Weavile";
  public fullName: string = "Weavile BUS 86";
  public text: string = "Weavile";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
