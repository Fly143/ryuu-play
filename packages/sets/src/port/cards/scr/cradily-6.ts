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

export class Cradily_6 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Lileep";
  public hp: number = 150;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Selective Slime", powerType: PowerType.ABILITY, text: "Once during your turn, you may flip a coin. If heads, choose Burned, Confused, or Poisoned. Your opponent's Active Pokémon is now affected by that Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Miasma Wind", cost: [], damage: "100×", text: "This attack does 100 damage for each Special Condition affecting your opponent's Active Pokémon." }
  ];
  public set: string = "SCR";
  public name: string = "Cradily";
  public fullName: string = "Cradily SCR 6";
  public text: string = "Cradily";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
