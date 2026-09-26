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

export class LightSunflora_72 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Sunkern";
  public hp: number = 80;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Reflected Sunlight", cost: [], damage: "", text: "Attach up to 2 Grass Energy cards from your hand to 1 of your Grass Pokémon." },
      { name: "Solarbeam", cost: [], damage: "40", text: "" }
  ];
  public set: string = "N4";
  public name: string = "Light Sunflora";
  public fullName: string = "Light Sunflora N4 72";
  public text: string = "Light Sunflora";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
