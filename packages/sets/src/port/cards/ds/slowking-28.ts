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

export class Slowking_282 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Slowpoke";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Prize Shift", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may choose a card from your hand and put it as a Prize card face up. If you do, choose 1 of your face-down Prize cards without looking and put it into your hand. This power can't be used if Slowking is affected by a Special Condition or if all of your Prize cards are face up.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Psychic Option", cost: [], damage: "20+", text: "If Slowking has a Water Energy card attached to it, this attack does 20 damage plus 20 more damage. If Slowking has a Psychic Energy card attached to it, discard a Special Energy card attached to the Defending Pokémon, if any." }
  ];
  public set: string = "DS";
  public name: string = "Slowking";
  public fullName: string = "Slowking DS 28";
  public text: string = "Slowking";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
