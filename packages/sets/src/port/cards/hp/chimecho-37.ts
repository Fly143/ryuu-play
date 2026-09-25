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

export class Chimecho_37 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Delta Support", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if you have a Supporter card with Holon in its name in play, you may search your discard pile for a basic Energy card or a δ Rainbow Energy card, show it to your opponent, and put it into your hand. This power can't be used if Chimecho is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hook", cost: [], damage: "20", text: "" }
  ];
  public set: string = "HP";
  public name: string = "Chimecho δ";
  public fullName: string = "Chimecho δ HP 37";
  public text: string = "Chimecho δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* searchAnyToHand:1 */ state;
    }
    return state;
  }
}
