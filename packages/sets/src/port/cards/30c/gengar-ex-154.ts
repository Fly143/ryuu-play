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

export class GengarEx_154 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Haunter";
  public hp: number = 280;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Fainting Spell", powerType: PowerType.ABILITY, text: "If this Pokémon is Knocket Out by damage from an attack from your opponent's Pokémon, flip a coin. If heads, the Attacking Pokémon is Knocket Out.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Chaotic Pain", cost: [], damage: "", text: "Place 13 damage counters on 1 of your opponent's Pokémon." }
  ];
  public set: string = "30C";
  public name: string = "Gengar ex";
  public fullName: string = "Gengar ex 30C 154";
  public text: string = "Gengar ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
