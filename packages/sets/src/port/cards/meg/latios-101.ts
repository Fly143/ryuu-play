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

export class Latios_101 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Lustrous Assist", powerType: PowerType.ABILITY, text: "Once during your turn, when your Mega Latias ex moves from your Bench to the Active Spot, you may use this Ability. Move any amount of Energy from your Benched Pokémon to your Active Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Dragon Claw", cost: [], damage: "130", text: "" }
  ];
  public set: string = "MEG";
  public name: string = "Latios";
  public fullName: string = "Latios MEG 101";
  public text: string = "Latios";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
