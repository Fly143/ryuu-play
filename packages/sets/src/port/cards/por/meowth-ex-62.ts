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

export class MeowthEx_62 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 170;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Last-Ditch Catch", powerType: PowerType.ABILITY, text: "Once during your turn, when you play this Pokémon from your hand onto your Bench, you may use this Ability. Search your deck for a Supporter card, reveal it, and put it into your hand. Then, shuffle your deck. You can't use more than 1 Ability that has \"Last-Ditch\" in its name each turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Tuck Tail", cost: [], damage: "60", text: "Put this Pokémon and all attached cards into your hand." }
  ];
  public set: string = "POR";
  public name: string = "Meowth ex";
  public fullName: string = "Meowth ex POR 62";
  public text: string = "Meowth ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
