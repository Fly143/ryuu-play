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

export class Entei_17 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Legendary Body", powerType: PowerType.ABILITY, text: "As long as Entei is your Active Pokémon, Entei and Energy cards attached to it aren't affected by effects from Trainer cards other than Stadium cards. As long as this Power is active, discard any Trainer cards attached to Entei. (This power works even if Entei is Asleep, Confused, or Paralyzed.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Mega Flame", cost: [], damage: "50", text: "Flip 2 coins. For each tails, discard 1 Fire Energy card from Entei, if it has any." }
  ];
  public set: string = "N3";
  public name: string = "Entei";
  public fullName: string = "Entei N3 17";
  public text: string = "Entei";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
