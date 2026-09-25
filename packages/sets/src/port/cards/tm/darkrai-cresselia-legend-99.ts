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

export class DarkraiCresseliaLEGEND_99 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 150;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Lost Crisis", cost: [], damage: "100", text: "Choose 2 Energy attached to Darkrai & Cresselia LEGEND and put them in the Lost Zone. If any of your opponent's Pokémon would be Knocked Out by damage from this attack, put that Pokémon and all cards attached to it in the Lost Zone instead of discarding it." },
      { name: "Moon's Invite", cost: [], damage: "", text: "Move as many damage counters on your opponent's Pokémon as you like to any of your opponent's other Pokémon in any way you like." }
  ];
  public set: string = "TM";
  public name: string = "Darkrai & Cresselia LEGEND";
  public fullName: string = "Darkrai & Cresselia LEGEND TM 99";
  public text: string = "Darkrai & Cresselia LEGEND";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
