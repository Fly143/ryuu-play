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

export class Lampent_32 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Litwick";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Top Entry", powerType: PowerType.ABILITY, text: "Once during your turn, if you drew this Pokémon from your deck at the beginning of your turn and your Bench isn't full, before you put it into your hand, you may put it onto your Bench.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Reignite", cost: [], damage: "20", text: "Attach a Fire Energy card from your discard pile to 1 of your Pokémon." }
  ];
  public set: string = "RCL";
  public name: string = "Lampent";
  public fullName: string = "Lampent RCL 32";
  public text: string = "Lampent";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
