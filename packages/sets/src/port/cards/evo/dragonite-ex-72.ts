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

export class DragoniteEX_72 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 180;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Pull Up", powerType: PowerType.ABILITY, text: "When you play this Pokémon from your hand onto your Bench, you may put 2 Basic Pokémon (except for Dragonite-EX) from your discard pile into your hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hyper Beam", cost: [], damage: "130", text: "Discard an Energy attached to your opponent's Active Pokémon." }
  ];
  public set: string = "EVO";
  public name: string = "Dragonite-EX";
  public fullName: string = "Dragonite-EX EVO 72";
  public text: string = "Dragonite-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
