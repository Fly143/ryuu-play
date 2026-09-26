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

export class ButterfreeFB_17 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Compound Eyes", powerType: PowerType.ABILITY, text: "If your opponent's Active Pokémon has any Poké-Bodies, each of Butterfree FB's attacks does 30 more damage to the Active Pokémon (before applying Weakness and Resistance).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Select Powder", cost: [], damage: "30", text: "Choose either Burned or Poisoned. The Defending Pokémon is now affected by that Special Condition." }
  ];
  public set: string = "SV";
  public name: string = "Butterfree FB";
  public fullName: string = "Butterfree FB SV 17";
  public text: string = "Butterfree FB";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
