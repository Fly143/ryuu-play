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

export class Kingdra_33 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Seadra";
  public hp: number = 150;
    public height?: number = 1.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Deep Sea King", powerType: PowerType.ABILITY, text: "When your Active Pokémon is Knocked Out by damage from an attack from your opponent's Pokémon, you may move any amount of Water Energy from that Pokémon to this Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Aqua Burst", cost: [], damage: "40×", text: "This attack does 40 damage for each Water Energy attached to this Pokémon." }
  ];
  public set: string = "SHF";
  public name: string = "Kingdra";
  public fullName: string = "Kingdra SHF 33";
  public text: string = "Kingdra";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
