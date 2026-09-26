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

export class Shedinja_144 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Nincada";
  public hp: number = 60;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Fragile Husk", powerType: PowerType.ABILITY, text: "If this Pokémon is Knocked Out by damage from an attack from your opponent's Pokémon ex, your opponent can't take any Prize cards for it.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Damage Beat", cost: [], damage: "20×", text: "This attack does 20 damage for each damage counter on your opponent's Active Pokémon." }
  ];
  public set: string = "MEG";
  public name: string = "Shedinja";
  public fullName: string = "Shedinja MEG 144";
  public text: string = "Shedinja";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
