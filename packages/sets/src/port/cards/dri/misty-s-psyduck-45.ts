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

export class MistySPsyduck_45 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Flustered Leap", powerType: PowerType.ABILITY, text: "Once during your turn, if this Pokémon is on your Bench, you may discard the bottom card of your deck. If you do, discard all cards from this Pokémon and put this Pokémon on top of your deck.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Sprinkle Water", cost: [], damage: "30", text: "" }
  ];
  public set: string = "DRI";
  public name: string = "Misty's Psyduck";
  public fullName: string = "Misty's Psyduck DRI 45";
  public text: string = "Misty's Psyduck";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
