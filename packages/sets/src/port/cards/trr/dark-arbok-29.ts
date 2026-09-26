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

export class DarkArbok_29 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Ekans";
  public hp: number = 90;
    public height?: number = 3.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Swallow Up", cost: [], damage: "10+", text: "Before doing damage, count the remaining HP of the Defending Pokémon and Dark Arbok. If the Defending Pokémon has fewer remaining HP than Dark Arbok's, this attack does 10 damage plus 30 more damage." },
      { name: "Extra Poison", cost: [], damage: "30", text: "If the Defending Pokémon is Pokémon-ex, the Defending Pokémon is now Asleep and Poisoned." }
  ];
  public set: string = "TRR";
  public name: string = "Dark Arbok";
  public fullName: string = "Dark Arbok TRR 29";
  public text: string = "Dark Arbok";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
