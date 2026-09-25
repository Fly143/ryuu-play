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

export class StonjournerVMAX_116 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Stonjourner V";
  public hp: number = 330;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Stone Gift", cost: [], damage: "", text: "Attach a Fighting Energy card from your hand to 1 of your Pokémon. If you do, heal 120 damage from that Pokémon." },
      { name: "Max Rockfall", cost: [], damage: "200", text: "" }
  ];
  public set: string = "SSH";
  public name: string = "Stonjourner VMAX";
  public fullName: string = "Stonjourner VMAX SSH 116";
  public text: string = "Stonjourner VMAX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
