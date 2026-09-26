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

export class BlaineSGrowlithe_62 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Blaze", cost: [], damage: "20", text: "Does 10 damage to each Grass Pokémon on your opponent's Bench. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "G1";
  public name: string = "Blaine's Growlithe";
  public fullName: string = "Blaine's Growlithe G1 62";
  public text: string = "Blaine's Growlithe";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
