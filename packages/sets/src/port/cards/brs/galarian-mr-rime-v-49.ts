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

export class GalarianMrRimeV_49 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 210;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Surprising Hand", cost: [], damage: "", text: "Search your deck for up to 3 Item cards, reveal them, and put them into your hand. Then, shuffle your deck." },
      { name: "Customized Cane", cost: [], damage: "90+", text: "If this Pokémon has a Pokémon Tool attached, this attack does 90 more damage." }
  ];
  public set: string = "BRS";
  public name: string = "Galarian Mr. Rime V";
  public fullName: string = "Galarian Mr. Rime V BRS 49";
  public text: string = "Galarian Mr. Rime V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchAnyToHand:3");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 90, 1);
    }
    return state;
  }
}
