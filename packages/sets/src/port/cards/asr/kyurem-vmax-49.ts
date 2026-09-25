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

export class KyuremVMAX_49 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Kyurem V";
  public hp: number = 330;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Glaciated World", powerType: PowerType.ABILITY, text: "Once during your turn, you may discard the top card of your deck. If that card is a Water Energy card, attach it to 1 of your Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Max Frost", cost: [], damage: "120+", text: "You may discard any amount of Water Energy from this Pokémon. This attack does 50 more damage for each card you discarded in this way." }
  ];
  public set: string = "ASR";
  public name: string = "Kyurem VMAX";
  public fullName: string = "Kyurem VMAX ASR 49";
  public text: string = "Kyurem VMAX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 50, 0);
    }
    return state;
  }
}
