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

export class LightTogetic_15 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Togepi";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Gift", powerType: PowerType.ABILITY, text: "When you play Light Togetic from your hand, your opponent may search his or her deck for a Pokémon Tool card, show that card to you, and put it into his or her hand. Either way, you may do the same, and then each player who searched shuffles his or her deck.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Sweet Kiss", cost: [], damage: "30", text: "Your opponent may draw a card." }
  ];
  public set: string = "N4";
  public name: string = "Light Togetic";
  public fullName: string = "Light Togetic N4 15";
  public text: string = "Light Togetic";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
