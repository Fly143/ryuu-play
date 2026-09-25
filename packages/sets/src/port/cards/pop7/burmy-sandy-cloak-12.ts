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

export class BurmySandyCloak_12 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Wear Cloak", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if Burmy Sandy Cloak is your Active Pokémon, you may search your discard pile for a basic Fighting Energy card and attach it to Burmy Sandy Cloak.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Sandy Cloak Tackle", cost: [], damage: "10+", text: "If Burmy Sandy Cloak has any Fighting Energy attached to it, this attack does 10 damage plus 10 more damage." }
  ];
  public set: string = "POP7";
  public name: string = "Burmy Sandy Cloak";
  public fullName: string = "Burmy Sandy Cloak POP7 12";
  public text: string = "Burmy Sandy Cloak";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
