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

export class RadiantJirachi_120 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Entrusted Wishes", powerType: PowerType.ABILITY, text: "If this Pokémon is in the Active Spot and is Knocked Out by damage from an attack from your opponent's Pokémon, search your deck for up to 3 cards and put them into your hand. Then, shuffle your deck.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Astral Misfortune", cost: [], damage: "", text: "Flip 2 coins. If both of them are heads, your opponent's Active Pokémon is Knocked Out." }
  ];
  public set: string = "PGO";
  public name: string = "Radiant Jirachi";
  public fullName: string = "Radiant Jirachi PGO 120";
  public text: string = "Radiant Jirachi";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
