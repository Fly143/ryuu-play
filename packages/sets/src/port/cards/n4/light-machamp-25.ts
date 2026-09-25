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

export class LightMachamp_25 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Light Machoke";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Tag Team", powerType: PowerType.ABILITY, text: "When you play Light Machamp from your hand, if it is on your Bench, remove 3 damage counters from your Active Pokémon. If it has fewer damage counters than that, remove all of them. Then, switch Light Machamp with your Active Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Beatdown", cost: [], damage: "50", text: "If the Defending Pokémon has Dark in its name or is a Darkness Pokémon, flip a coin. If heads, this attack does 100 damage instead of 50." }
  ];
  public set: string = "N4";
  public name: string = "Light Machamp";
  public fullName: string = "Light Machamp N4 25";
  public text: string = "Light Machamp";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
