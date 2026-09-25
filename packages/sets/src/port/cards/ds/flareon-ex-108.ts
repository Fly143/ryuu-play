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

export class FlareonEx_108 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Eevee";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Evolutionary Flame", powerType: PowerType.ABILITY, text: "Once during your turn, when you play Flareon ex from your hand to evolve 1 of your Pokémon, you may choose 1 of the Defending Pokémon. That Pokémon is now Burned and Confused.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Flame Screen", cost: [], damage: "30", text: "During your opponent's next turn, any damage done to Flareon ex by attacks is reduced by 20 (after applying Weakness and Resistance)." },
      { name: "Heat Tackle", cost: [], damage: "70", text: "Flareon ex does 10 damage to itself." }
  ];
  public set: string = "DS";
  public name: string = "Flareon ex";
  public fullName: string = "Flareon ex DS 108";
  public text: string = "Flareon ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.selfReduceDamageNextTurn(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, -10, 1);
    }
    return state;
  }
}
