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

export class BurmyTrashCloak_80 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Wear Cloak", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if Burmy Trash Cloak is your Active Pokémon, you may search your discard for a basic Metal Energy card and attach it to Burmy Trash Cloak.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Trash Cloak Tackle", cost: [], damage: "10+", text: "If Burmy Trash Cloak has any Metal Energy attached to it, this attack does 10 damage plus 10 more damage." }
  ];
  public set: string = "SW";
  public name: string = "Burmy Trash Cloak";
  public fullName: string = "Burmy Trash Cloak SW 80";
  public text: string = "Burmy Trash Cloak";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
