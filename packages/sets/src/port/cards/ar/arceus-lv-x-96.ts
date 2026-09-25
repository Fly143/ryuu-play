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

export class ArceusLVX_96 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Arceus";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Multitype", powerType: PowerType.ABILITY, text: "Arceus LV.X's type is the same type as its previous Level.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Psychic Bolt", cost: [], damage: "100", text: "Discard a Lightning Energy and a Psychic Energy attached to Arceus." }
  ];
  public set: string = "AR";
  public name: string = "Arceus LV.X";
  public fullName: string = "Arceus LV.X AR 96";
  public text: string = "Arceus LV.X";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
