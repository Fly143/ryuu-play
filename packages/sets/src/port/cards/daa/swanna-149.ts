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

export class Swanna_149 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Ducklett";
  public hp: number = 110;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sky Circus", powerType: PowerType.ABILITY, text: "If you played Bird Keeper from your hand during this turn, ignore all Energy in this Pokémon's attack costs.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Feather Slice", cost: [], damage: "70+", text: "You may discard a card from your hand. If you do, this attack does 70 more damage." }
  ];
  public set: string = "DAA";
  public name: string = "Swanna";
  public fullName: string = "Swanna DAA 149";
  public text: string = "Swanna";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 70, 1);
    }
    return state;
  }
}
