import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
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

export class DurantEx_236 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 190;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sudden Shearing", powerType: PowerType.ABILITY, text: "When you play this Pokémon from your hand onto your Bench during your turn, you may discard the top card of your opponent's deck.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Vengeful Crush", cost: [], damage: "120+", text: "This attack does 30 more damage for each Prize card your opponent has taken." }
  ];
  public set: string = "SSP";
  public name: string = "Durant ex";
  public fullName: string = "Durant ex SSP 236";
  public text: string = "Durant ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerPrize(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
