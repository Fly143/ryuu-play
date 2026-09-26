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

export class DarkraiG_3 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Eerie Aura", powerType: PowerType.ABILITY, text: "Put 1 damage counter on each of your opponent's Pokémon that remains Asleep between turns.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Darkness Sleep", cost: [], damage: "50", text: "If the Defending Pokémon already has any damage counters on it, that Pokémon is now Asleep." }
  ];
  public set: string = "RR";
  public name: string = "Darkrai G";
  public fullName: string = "Darkrai G RR 3";
  public text: string = "Darkrai G";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
