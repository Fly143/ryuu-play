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

export class Pachirisu_18 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Self-Generation", powerType: PowerType.ABILITY, text: "Once during your turn, when you put Pachirisu from your hand onto your Bench, you may attach up to 2 Lightning Energy cards from your hand to Pachirisu.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Shocking Bolt", cost: [], damage: "50", text: "Put all Energy cards attached to Pachirisu in the Lost Zone." }
  ];
  public set: string = "CL";
  public name: string = "Pachirisu";
  public fullName: string = "Pachirisu CL 18";
  public text: string = "Pachirisu";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
