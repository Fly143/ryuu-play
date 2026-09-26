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

export class Sinistcha_22 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Poltchageist";
  public hp: number = 70;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Cursed Drop", cost: [], damage: "", text: "Put 4 damage counters on your opponent's Pokémon in any way you like." },
      { name: "Spill the Tea", cost: [], damage: "70×", text: "Discard up to 3 Grass Energy cards from your Pokémon. This attack does 70 damage for each card you discarded in this way." }
  ];
  public set: string = "TWM";
  public name: string = "Sinistcha";
  public fullName: string = "Sinistcha TWM 22";
  public text: string = "Sinistcha";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.putCountersDefending(this, store, state, effect).use(effect, 40);
    }
    return state;
  }
}
