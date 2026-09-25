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

export class AbsolGLVX_141 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Absol G";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Darkness Send", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), when you put Absol G LV.X from your hand onto your Active Absol G, you may flip 3 coins. For each heads, put the top card from your opponent's deck in the Lost Zone.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Darkness Slugger", cost: [], damage: "30+", text: "You may discard a card from your hand. If you do, this attack does 30 damage plus 30 more damage." }
  ];
  public set: string = "SV";
  public name: string = "Absol G LV.X";
  public fullName: string = "Absol G LV.X SV 141";
  public text: string = "Absol G LV.X";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
