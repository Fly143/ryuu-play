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

export class Poliwrath_11 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Poliwhirl";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Spiral Swirl", powerType: PowerType.ABILITY, text: "If Poliwrath is your Active Pokémon and is Knocked Out by damage from an opponent's attack, the Attacking Pokémon is now Confused.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Beatdown", cost: [], damage: "40+", text: "If the Defending Pokémon is a Darkness Pokémon or has Dark in its name, this attack does 40 damage plus 30 more damage." },
      { name: "Hyper Splash", cost: [], damage: "60+", text: "If the Defending Pokémon is a Stage 2 Evolved Pokémon, this attack does 60 damage plus 30 more damage." }
  ];
  public set: string = "UF";
  public name: string = "Poliwrath";
  public fullName: string = "Poliwrath UF 11";
  public text: string = "Poliwrath";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
