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

export class Annihilape_41 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Primeape";
  public hp: number = 150;
    public height?: number = 0.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Durable Body", powerType: PowerType.ABILITY, text: "If this Pokémon would be Knocked Out by damage from an attack, flip a coin. If heads, this Pokémon is not Knocked Out, and its remaining HP becomes 10.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Ghostly Blow", cost: [], damage: "100", text: "Place 5 damage counters on 1 of your opponent's Benched Pokémon." }
  ];
  public set: string = "PBL";
  public name: string = "Annihilape";
  public fullName: string = "Annihilape PBL 41";
  public text: string = "Annihilape";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
