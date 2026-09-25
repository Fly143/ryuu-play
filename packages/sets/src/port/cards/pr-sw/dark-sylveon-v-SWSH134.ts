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

export class DarkSylveonVSWSH134 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 180;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Disarming Voice", cost: [], damage: "30", text: "Your opponent's Active Pokémon is now Confused." },
      { name: "Tricky Ribbon", cost: [], damage: "100", text: "Choose a random card from your opponent's hand. Your opponent reveals that card and shuffles it into their deck." }
  ];
  public set: string = "PR-SW";
  public name: string = "Dark Sylveon V";
  public fullName: string = "Dark Sylveon V PR-SW SWSH134";
  public text: string = "Dark Sylveon V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    return state;
  }
}
