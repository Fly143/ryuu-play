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

export class Toxtricity_108 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Toxel";
  public hp: number = 120;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Maximum Downer", powerType: PowerType.ABILITY, text: "If all your Pokémon in play are Fusion Strike Pokémon, your opponent's Pokémon VMAX in play get -30 HP.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Head Bolt", cost: [], damage: "90", text: "" }
  ];
  public set: string = "EVS";
  public name: string = "Toxtricity";
  public fullName: string = "Toxtricity EVS 108";
  public text: string = "Toxtricity";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
