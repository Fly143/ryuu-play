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

export class LightMachoke_49 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Machop";
  public hp: number = 80;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Return Home", cost: [], damage: "", text: "If you have any Benched Pokémon, shuffle 1 of them and all cards attached to it into your deck." },
      { name: "Gentle Kick", cost: [], damage: "40", text: "If the Defending Pokémon has no damage counters on it, this attack does 40 damage. If it has any, this attack does 20 damage." }
  ];
  public set: string = "N4";
  public name: string = "Light Machoke";
  public fullName: string = "Light Machoke N4 49";
  public text: string = "Light Machoke";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
