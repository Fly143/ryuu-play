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

export class Pupitar_75 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Larvitar";
  public hp: number = 80;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Skull Bash", cost: [], damage: "20", text: "" },
      { name: "Dust Devil", cost: [], damage: "", text: "This attack does 20 damage to each non-Fighting Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "CES";
  public name: string = "Pupitar";
  public fullName: string = "Pupitar CES 75";
  public text: string = "Pupitar";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
