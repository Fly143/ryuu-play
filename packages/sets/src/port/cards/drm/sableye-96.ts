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

export class Sableye_96 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Quick Hunt", cost: [], damage: "", text: "If you go first, you can use this attack on your first turn. Search your deck for a card and put it into your hand. Then, shuffle your deck." },
      { name: "Cursed Drop", cost: [], damage: "", text: "Put 3 damage counters on your opponent's Pokémon in any way you like." }
  ];
  public set: string = "DRM";
  public name: string = "Sableye";
  public fullName: string = "Sableye DRM 96";
  public text: string = "Sableye";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchTrainerToHand:1");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.putCountersDefending(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
