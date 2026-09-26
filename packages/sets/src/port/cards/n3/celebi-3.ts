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

export class Celebi_32 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Time Travel", powerType: PowerType.ABILITY, text: "If an opponent's attack would Knock Out Celebi, flip a coin. If heads, Celebi isn't Knocked Out and you shuffle it and all cards attached to it into your deck. This power doesn't work if Celebi is already Asleep, Confused, or Paralyzed.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Psychic Damage", cost: [], damage: "", text: "Flip 3 coins. For each heads, put 1 damage counter on the Defending Pokémon." }
  ];
  public set: string = "N3";
  public name: string = "Celebi";
  public fullName: string = "Celebi N3 3";
  public text: string = "Celebi";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
