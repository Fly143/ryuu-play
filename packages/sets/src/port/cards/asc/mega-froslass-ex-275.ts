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

export class MegaFroslassEx_275 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Snorunt";
  public hp: number = 310;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Resentful Refrain", cost: [], damage: "50×", text: "This attack does 50 damage for each card in your opponent's hand." },
      { name: "Absolute Snow", cost: [], damage: "150", text: "Your opponent's Active Pokémon is now Asleep." }
  ];
  public set: string = "ASC";
  public name: string = "Mega Froslass ex";
  public fullName: string = "Mega Froslass ex ASC 275";
  public text: string = "Mega Froslass ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    return state;
  }
}
