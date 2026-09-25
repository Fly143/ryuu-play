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

export class Lunatone_68 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Heal Block", powerType: PowerType.ABILITY, text: "If you have Solrock in play, Pokémon (both yours and your opponent's) can't be healed.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Lunar Blast", cost: [], damage: "30", text: "" }
  ];
  public set: string = "BUS";
  public name: string = "Lunatone";
  public fullName: string = "Lunatone BUS 68";
  public text: string = "Lunatone";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
