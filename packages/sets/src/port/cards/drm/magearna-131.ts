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

export class Magearna_131 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Minor Errand-Running", cost: [], damage: "", text: "Search your deck for up to 2 basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck." },
      { name: "Energy Press", cost: [], damage: "30+", text: "This attack does 20 more damage times the amount of Energy attached to your opponent's Active Pokémon." }
  ];
  public set: string = "DRM";
  public name: string = "Magearna";
  public fullName: string = "Magearna DRM 131";
  public text: string = "Magearna";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchEnergyToHand:2");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 20, 1);
    }
    return state;
  }
}
