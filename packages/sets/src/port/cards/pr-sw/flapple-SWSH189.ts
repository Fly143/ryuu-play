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

export class FlappleSWSH189 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Applin";
  public hp: number = 80;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Flight Up", cost: [], damage: "", text: "Attach up to 3 basic Energy cards from your discard pile to 1 of your Benched Pokémon." },
      { name: "Corrosive Acid", cost: [], damage: "70", text: "Your opponent's Active Pokémon is now Burned." }
  ];
  public set: string = "PR-SW";
  public name: string = "Flapple";
  public fullName: string = "Flapple PR-SW SWSH189";
  public text: string = "Flapple";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.BURNED);
    }
    return state;
  }
}
