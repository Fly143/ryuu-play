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

export class WailordV_13 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 280;
    public height?: number = 14.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Draw Up", cost: [], damage: "", text: "Attach up to 3 Water Energy cards from your discard pile to this Pokémon." },
      { name: "Ocean Waves", cost: [], damage: "120×", text: "Flip 3 coins. This attack does 120 damage for each heads." }
  ];
  public set: string = "CPA";
  public name: string = "Wailord V";
  public fullName: string = "Wailord V CPA 13";
  public text: string = "Wailord V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 3, 120);
    }
    return state;
  }
}
