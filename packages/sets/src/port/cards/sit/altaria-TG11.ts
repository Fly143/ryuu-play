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

export class AltariaTG11 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Swablu";
  public hp: number = 110;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Magical Echo", cost: [], damage: "", text: "Move all damage counters from 1 of your Benched Pokémon to your opponent's Active Pokémon." },
      { name: "Blasting Wind", cost: [], damage: "90", text: "" }
  ];
  public set: string = "SIT";
  public name: string = "Altaria";
  public fullName: string = "Altaria SIT TG11";
  public text: string = "Altaria";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
