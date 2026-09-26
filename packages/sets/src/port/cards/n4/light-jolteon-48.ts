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

export class LightJolteon_48 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Eevee";
  public hp: number = 70;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Pulse Guard", cost: [], damage: "", text: "During your opponent's next turn, whenever 30 or more damage is done to Light Jolteon (after applying Weakness and Resistance), prevent that damage. (Any other effects of attacks still happen.)" },
      { name: "Thunder Needle", cost: [], damage: "20×", text: "Flip 3 coins. This attack does 20 damage times the number of heads. If you get 2 or more heads, the Defending Pokémon is now Paralyzed." }
  ];
  public set: string = "N4";
  public name: string = "Light Jolteon";
  public fullName: string = "Light Jolteon N4 48";
  public text: string = "Light Jolteon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 3, 20);
    }
    return state;
  }
}
