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

export class Ribombee_146 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Cutiefly";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Mysterious Buzz", powerType: PowerType.ABILITY, text: "As long as this Pokémon is on your Bench, whenever your opponent plays a Supporter card from their hand, prevent all effects of that card done to your Fairy Pokémon in play.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Stampede", cost: [], damage: "20", text: "" }
  ];
  public set: string = "DRM";
  public name: string = "Ribombee";
  public fullName: string = "Ribombee DRM 146";
  public text: string = "Ribombee";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
