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

export class TealMaskOgerpon_123 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Mountain Stroll", cost: [], damage: "", text: "Search your deck for up to 2 Basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck." },
      { name: "Ogre Comeback", cost: [], damage: "20+", text: "This attack does 20 more damage for each of your opponent's Benched Pokémon." }
  ];
  public set: string = "PR-SV";
  public name: string = "Teal Mask Ogerpon";
  public fullName: string = "Teal Mask Ogerpon PR-SV 123";
  public text: string = "Teal Mask Ogerpon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchEnergyToHand:2");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusPerOpponentBench(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
