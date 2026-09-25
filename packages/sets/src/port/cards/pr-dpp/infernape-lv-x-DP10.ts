import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
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
import { commonEffects } from '../../../common';

export class InfernapeLVXDP10 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Infernape";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Burning Head", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may look at the top 3 cards of your deck, choose 1 of them, and put it into your hand. Discard the other 2 cards. This power can't be used if Infernape is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Flare Up", cost: [], damage: "150", text: "Search your discard pile for 8 Fire Energy cards, show them to your opponent, and shuffle them into your deck. (This attack does nothing if you don't have 8 Fire Energy cards in your discard pile.)" }
  ];
  public set: string = "PR-DPP";
  public name: string = "Infernape LV.X";
  public fullName: string = "Infernape LV.X PR-DPP DP10";
  public text: string = "Infernape LV.X";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* structural */ state;
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "pokedex");
    }
    return state;
  }
}
