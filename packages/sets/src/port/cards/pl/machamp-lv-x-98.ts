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

export class MachampLVX_98 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Machamp";
  public hp: number = 150;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "No Guard", powerType: PowerType.ABILITY, text: "As long as Machamp is your Active Pokémon, each of Machamp's attacks does 60 more damage to the Active Pokémon (before applying Weakness and Resistance) and any damage done to Machamp by your opponent's Pokémon is increased by 60 (after applying Weakness and Resistance).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Strong-Willed", cost: [], damage: "20", text: "During your opponent's next turn, if Machamp would be Knocked Out by damage from an attack, flip a coin. If heads, Machamp is not Knocked Out and its remaining HP becomes 10 instead." }
  ];
  public set: string = "PL";
  public name: string = "Machamp LV.X";
  public fullName: string = "Machamp LV.X PL 98";
  public text: string = "Machamp LV.X";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
