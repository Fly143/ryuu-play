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

export class Hoppip_57 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 30;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Buffer", powerType: PowerType.ABILITY, text: "If Hoppip would be Knocked Out by an opponent's attack, flip a coin. If heads, Hoppip is not Knocked Out and its remaining HP becomes 10 instead.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Miracle Powder", cost: [], damage: "", text: "Flip a coin. If heads, choose 1 Special Condition. The Defending Pokémon is now affected by that Special Condition." }
  ];
  public set: string = "TRR";
  public name: string = "Hoppip";
  public fullName: string = "Hoppip TRR 57";
  public text: string = "Hoppip";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
