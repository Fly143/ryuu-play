import {
  Effect,
  State,
  StoreLike,
  PowerEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class Metang_90 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Beldum";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Metal Maker", powerType: PowerType.ABILITY, text: "Once during your turn, you may look at the top 4 cards of your deck and attach any number of Basic Metal Energy cards you find there to your Pokémon in any way you like. Shuffle the other cards and put them on the bottom of your deck.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Beam", cost: [], damage: "60", text: "" }
  ];
  public set: string = "PR-SV";
  public name: string = "Metang";
  public fullName: string = "Metang PR-SV 90";
  public text: string = "Metang";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* pokedex */ state;
    }
    return state;
  }
}
