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

export class Marshtomp_41 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Mudkip";
  public hp: number = 80;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Natural Cure", powerType: PowerType.ABILITY, text: "When you attach a Water Energy card from your hand to Marshtomp, remove all Special Conditions from Marshtomp.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Aqua Sonic", cost: [], damage: "20", text: "This attack's damage is not affected by Resistance." }
  ];
  public set: string = "RS";
  public name: string = "Marshtomp";
  public fullName: string = "Marshtomp RS 41";
  public text: string = "Marshtomp";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
