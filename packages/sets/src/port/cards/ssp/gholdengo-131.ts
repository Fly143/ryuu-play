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

export class Gholdengo_131 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Gimmighoul";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Strike It Rich", cost: [], damage: "30+", text: "If this Pokémon evolved from Gimmighoul during this turn, this attack does 90 more damage." },
      { name: "Surf Back", cost: [], damage: "100", text: "You may shuffle this Pokémon and all attached cards into your deck." }
  ];
  public set: string = "SSP";
  public name: string = "Gholdengo";
  public fullName: string = "Gholdengo SSP 131";
  public text: string = "Gholdengo";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 90, 1);
    }
    return state;
  }
}
