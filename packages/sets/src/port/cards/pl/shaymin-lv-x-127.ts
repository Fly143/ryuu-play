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

export class ShayminLVX_127 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Shaymin";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Revenge Seed", powerType: PowerType.ABILITY, text: "If any of your Grass Pokémon were Knocked Out by damage from an opponent's attack during his or her last turn, each of Shaymin's attacks does 60 more damage to the Active Pokémon (before applying Weakness and Resistance).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Energy Flare", cost: [], damage: "50", text: "You may move any number of Energy cards attached to your Pokémon to your other Pokémon in any way you like." }
  ];
  public set: string = "PL";
  public name: string = "Shaymin LV.X";
  public fullName: string = "Shaymin LV.X PL 127";
  public text: string = "Shaymin LV.X";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
