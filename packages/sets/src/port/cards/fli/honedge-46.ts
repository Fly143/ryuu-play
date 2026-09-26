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

export class Honedge_46 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Final Hour", powerType: PowerType.ABILITY, text: "If this Pokémon is your Active Pokémon and is Knocked Out by damage from an opponent's attack, put 3 damage counters on 1 of your opponent's Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Slash", cost: [], damage: "50", text: "" }
  ];
  public set: string = "FLI";
  public name: string = "Honedge";
  public fullName: string = "Honedge FLI 46";
  public text: string = "Honedge";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
