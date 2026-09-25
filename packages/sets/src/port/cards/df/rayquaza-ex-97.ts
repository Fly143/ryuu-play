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

export class RayquazaEx_97 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Rage Aura", powerType: PowerType.ABILITY, text: "If you have more Prize cards left than your opponent, ignore all Colorless Energy necessary to use Rayquaza ex's Special Circuit and Sky-high Claws attacks.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Special Circuit", cost: [], damage: "", text: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to the Pokémon. If you choose a Pokémon that has any Poké-Powers or Poké-Bodies, this attack does 50 damage instead. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Sky-high Claws", cost: [], damage: "70", text: "" }
  ];
  public set: string = "DF";
  public name: string = "Rayquaza ex δ";
  public fullName: string = "Rayquaza ex δ DF 97";
  public text: string = "Rayquaza ex δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
