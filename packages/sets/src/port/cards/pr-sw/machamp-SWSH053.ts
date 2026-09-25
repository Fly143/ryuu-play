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

export class MachampSWSH053 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Machoke";
  public hp: number = 170;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Macho Revenge", cost: [], damage: "20×", text: "This attack does 20 damage for each Fighting Pokémon in your discard pile." },
      { name: "Dynamite Punch", cost: [], damage: "200", text: "This Pokémon also does 50 damage to itself." }
  ];
  public set: string = "PR-SW";
  public name: string = "Machamp";
  public fullName: string = "Machamp PR-SW SWSH053";
  public text: string = "Machamp";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, -50, 1);
    }
    return state;
  }
}
