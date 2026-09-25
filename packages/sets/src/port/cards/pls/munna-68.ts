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

export class Munna_68 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Long-Distance Hypnosis", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may flip a coin. If heads, your opponent's Active Pokémon is now Asleep. If tails, your Active Pokémon is now Asleep.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Psyshot", cost: [], damage: "20", text: "" }
  ];
  public set: string = "PLS";
  public name: string = "Munna";
  public fullName: string = "Munna PLS 68";
  public text: string = "Munna";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
