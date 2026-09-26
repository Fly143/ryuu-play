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

export class Florges_152 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Floette";
  public hp: number = 130;
    public height?: number = 1.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Flower Picking", powerType: PowerType.ABILITY, text: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may choose 2 random cards from your opponent's hand. Your opponent reveals those cards and shuffles them into their deck.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Petal Dance", cost: [], damage: "60×", text: "Flip 3 coins. This attack does 60 damage for each heads. This Pokémon is now Confused." }
  ];
  public set: string = "CEC";
  public name: string = "Florges";
  public fullName: string = "Florges CEC 152";
  public text: string = "Florges";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 3, 60);
    }
    return state;
  }
}
