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

export class WhiteKyuremEX_101 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 180;
    public height?: number = 3.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Dragon Stream", cost: [], damage: "60", text: "Flip a coin. If heads, attach a basic Energy card from your discard pile to this Pokémon." },
      { name: "Ice Burn", cost: [], damage: "150", text: "Discard 2 Fire Energy attached to this Pokémon. The Defending Pokémon is now Burned." }
  ];
  public set: string = "PHF";
  public name: string = "White Kyurem-EX";
  public fullName: string = "White Kyurem-EX PHF 101";
  public text: string = "White Kyurem-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.attachBasicFromDiscard(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.BURNED);
    }
    return state;
  }
}
