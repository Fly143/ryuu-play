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

export class GalarianMrRime_38 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Galarian Mr. Mime";
  public hp: number = 110;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Screen Cleaner", powerType: PowerType.ABILITY, text: "Prevent all effects of your opponent's attacks, except damage, done to all of your Pokémon that have Energy attached. (Existing effects are not removed.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Triple Spin", cost: [], damage: "50×", text: "Flip 3 coins. This attack does 50 damage for each heads." }
  ];
  public set: string = "RCL";
  public name: string = "Galarian Mr. Rime";
  public fullName: string = "Galarian Mr. Rime RCL 38";
  public text: string = "Galarian Mr. Rime";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 3, 50);
    }
    return state;
  }
}
