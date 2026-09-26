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

export class TapuKokoVMAX_166 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Tapu Koko V";
  public hp: number = 320;
    public height?: number = 1.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Max Shock", cost: [], damage: "180", text: "If you have more Prize cards remaining than your opponent, their Active Pokémon is now Paralyzed." }
  ];
  public set: string = "SHF";
  public name: string = "Tapu Koko VMAX";
  public fullName: string = "Tapu Koko VMAX SHF 166";
  public text: string = "Tapu Koko VMAX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
