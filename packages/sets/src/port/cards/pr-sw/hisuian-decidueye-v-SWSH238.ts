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

export class HisuianDecidueyeVSWSH238 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 220;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Mountain Hunt", cost: [], damage: "", text: "Search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck." },
      { name: "Close-Quarters Shooting", cost: [], damage: "100", text: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon." }
  ];
  public set: string = "PR-SW";
  public name: string = "Hisuian Decidueye V";
  public fullName: string = "Hisuian Decidueye V PR-SW SWSH238";
  public text: string = "Hisuian Decidueye V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchAnyToHand:2");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.ignoreWeaknessResistance(this, store, state, effect).use(effect);
    }
    return state;
  }
}
