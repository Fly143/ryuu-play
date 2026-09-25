import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class RadiantEeveeSWSH230 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Twinkle Gathering", cost: [], damage: "", text: "Search your deck for a number of cards up to the number of different types of Pokémon you have in play and put them into your hand. Then, shuffle your deck." },
      { name: "Boost Dash", cost: [], damage: "50", text: "" }
  ];
  public set: string = "PR-SW";
  public name: string = "Radiant Eevee";
  public fullName: string = "Radiant Eevee PR-SW SWSH230";
  public text: string = "Radiant Eevee";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* searchPokemonToHand:1 */ state;
    }
    return state;
  }
}
