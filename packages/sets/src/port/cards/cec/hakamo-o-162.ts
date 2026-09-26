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

export class HakamoO_162 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Jangmo-o";
  public hp: number = 80;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Fighter's Roar", powerType: PowerType.ABILITY, text: "If your opponent's Active Pokémon is a Pokémon-GX or Pokémon-EX, this Pokémon can evolve during the turn you play it.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Dragonslice", cost: [], damage: "30", text: "" }
  ];
  public set: string = "CEC";
  public name: string = "Hakamo-o";
  public fullName: string = "Hakamo-o CEC 162";
  public text: string = "Hakamo-o";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
