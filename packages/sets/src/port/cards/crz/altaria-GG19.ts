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

export class AltariaGG19 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Swablu";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Tempting Tune", powerType: PowerType.ABILITY, text: "Once during your turn, you may search your deck for a Supporter card, reveal it, shuffle your deck, then put that card on top of it.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Glide", cost: [], damage: "60", text: "" }
  ];
  public set: string = "CRZ";
  public name: string = "Altaria";
  public fullName: string = "Altaria CRZ GG19";
  public text: string = "Altaria";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* searchAnyToHand:1 */ state;
    }
    return state;
  }
}
