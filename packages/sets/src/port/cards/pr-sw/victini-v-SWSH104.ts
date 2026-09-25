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

export class VictiniVSWSH104 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 190;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Spreading Flames", cost: [], damage: "", text: "Attach up to 3 Fire Energy cards from your discard pile to your Pokémon in any way you like." },
      { name: "Energy Burst", cost: [], damage: "30×", text: "This attack does 30 damage for each Energy attached to both Active Pokémon." }
  ];
  public set: string = "PR-SW";
  public name: string = "Victini V";
  public fullName: string = "Victini V PR-SW SWSH104";
  public text: string = "Victini V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "bonusPerEnergyBoth:30");
    }
    return state;
  }
}
