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

export class Cryogonal_111 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Drag Off", cost: [], damage: "", text: "Switch in 1 of your opponent's Benched Pokémon to the Active Spot. This attack does 20 damage to the new Active Pokémon." },
      { name: "Icicle", cost: [], damage: "30", text: "" }
  ];
  public set: string = "BLK";
  public name: string = "Cryogonal";
  public fullName: string = "Cryogonal BLK 111";
  public text: string = "Cryogonal";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
