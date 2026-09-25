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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MimikyuEx_69 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 190;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Mischievous Hands", cost: [], damage: "", text: "Choose 2 of your opponent's Pokémon and put 3 damage counters on each of them." },
      { name: "Ghostly Trip", cost: [], damage: "120", text: "Your opponent's Active Pokémon is now Confused." }
  ];
  public set: string = "JTG";
  public name: string = "Mimikyu ex";
  public fullName: string = "Mimikyu ex JTG 69";
  public text: string = "Mimikyu ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    return state;
  }
}
