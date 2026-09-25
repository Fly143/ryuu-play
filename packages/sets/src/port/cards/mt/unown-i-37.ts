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

export class UnownI_37 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "ITEM", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if you have Unown I, Unown T, Unown E, and Unown M on your Bench, you may search your deck for a Trainer card, show it to your opponent, and put it into your hand. Shuffle your deck afterward. You can't use more than 1 ITEM Poké-Power each turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hidden Power", cost: [], damage: "", text: "Choose an Energy card attached to the Defending Pokémon and put it face down. Treat that card as a Special Energy card that provides Colorless Energy and doesn't have any effect other than providing Energy. Put that card face up at the end of your opponent's next turn." }
  ];
  public set: string = "MT";
  public name: string = "Unown [I]";
  public fullName: string = "Unown [I] MT 37";
  public text: string = "Unown [I]";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* searchAnyToHand:1 */ state;
    }
    return state;
  }
}
