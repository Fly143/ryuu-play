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

export class DarkFeraligatr_5 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Dark Croconaw";
  public hp: number = 80;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Scare", powerType: PowerType.ABILITY, text: "As long as Dark Feraligatr is your Active Pokémon, all of your opponent's Baby Pokémon Powers stop working and your opponent's Baby Pokémon can't attack. This power stops working while Dark Feraligatr is Asleep, Confused, or Paralyzed.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Crushing Blow", cost: [], damage: "50", text: "If the Defending Pokémon has any Energy cards attached to it, flip a coin. If heads, choose 1 of those cards and discard it." }
  ];
  public set: string = "N4";
  public name: string = "Dark Feraligatr";
  public fullName: string = "Dark Feraligatr N4 5";
  public text: string = "Dark Feraligatr";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
