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

export class Sunflora_8 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Sunkern";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Solar Power", cost: [], damage: "", text: "During your next turn, ignore all Energy in the attack costs of Grass Pokémon and Fire Pokémon. (This includes Pokémon that come into play on that turn.)" },
      { name: "Solar Beam", cost: [], damage: "80", text: "" }
  ];
  public set: string = "CEC";
  public name: string = "Sunflora";
  public fullName: string = "Sunflora CEC 8";
  public text: string = "Sunflora";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
