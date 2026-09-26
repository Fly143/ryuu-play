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

export class FloatzelGLLVX_104 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Floatzel GL";
  public hp: number = 100;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Water Rescue", powerType: PowerType.ABILITY, text: "Whenever any of your Water Pokémon (excluding any Floatzel GL) is Knocked Out by damage from your opponent's attack, you may put that Pokémon and all cards that were attached to it from your discard pile into your hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Energy Cyclone", cost: [], damage: "20×", text: "Choose as many Energy cards from your hand as you like and show them to your opponent. This attack does 20 damage times the number of Energy cards you chose. Put those Energy cards on top of your deck. Shuffle your deck afterward." }
  ];
  public set: string = "RR";
  public name: string = "Floatzel GL LV.X";
  public fullName: string = "Floatzel GL LV.X RR 104";
  public text: string = "Floatzel GL LV.X";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
