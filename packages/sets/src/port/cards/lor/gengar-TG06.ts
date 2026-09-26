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

export class GengarTG06 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Haunter";
  public hp: number = 120;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Netherworld Gate", powerType: PowerType.ABILITY, text: "Once during your turn, if this Pokémon is in your discard pile, you may put it onto your Bench. If you do, put 3 damage counters on this Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Screaming Circle", cost: [], damage: "", text: "Put 2 damage counters on your opponent's Active Pokémon for each of your opponent's Benched Pokémon." }
  ];
  public set: string = "LOR";
  public name: string = "Gengar";
  public fullName: string = "Gengar LOR TG06";
  public text: string = "Gengar";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
