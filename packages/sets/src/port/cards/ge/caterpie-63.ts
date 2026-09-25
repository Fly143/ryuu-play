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

export class Caterpie_63 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Pupate", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if Caterpie is your Active Pokémon, you may flip a coin. If heads, search your deck for a card that evolves from Caterpie and put it onto Caterpie. (This counts as evolving Caterpie.) Shuffle your deck afterward. This power can't be used if Caterpie is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Tackle", cost: [], damage: "20", text: "" }
  ];
  public set: string = "GE";
  public name: string = "Caterpie";
  public fullName: string = "Caterpie GE 63";
  public text: string = "Caterpie";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
