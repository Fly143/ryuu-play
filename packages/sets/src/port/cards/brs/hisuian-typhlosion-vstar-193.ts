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

export class HisuianTyphlosionVSTAR_193 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Hisuian Typhlosion V";
  public hp: number = 260;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Hollow Flame", cost: [], damage: "180", text: "Put 3 damage counters on your opponent's Benched Pokémon in any way you like." },
      { name: "Shimmering Star", cost: [], damage: "", text: "If your opponent's Active Pokémon has exactly 4 damage counters on it, that Pokémon is Knocked Out. (You can't use more than 1 VSTAR Power in a game.)" }
  ];
  public set: string = "BRS";
  public name: string = "Hisuian Typhlosion VSTAR";
  public fullName: string = "Hisuian Typhlosion VSTAR BRS 193";
  public text: string = "Hisuian Typhlosion VSTAR";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.putCountersDefending(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
