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

export class MimikyuEx_4 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 190;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Void Return", cost: [], damage: "30", text: "You may switch this Pokémon with 1 of your Benched Pokémon." },
      { name: "Energy Burst", cost: [], damage: "30×", text: "This attack does 30 damage for each Energy attached to both Active Pokémon." }
  ];
  public set: string = "PR-SV";
  public name: string = "Mimikyu ex";
  public fullName: string = "Mimikyu ex PR-SV 4";
  public text: string = "Mimikyu ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.switchSelf(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "bonusPerEnergyBoth:30");
    }
    return state;
  }
}
