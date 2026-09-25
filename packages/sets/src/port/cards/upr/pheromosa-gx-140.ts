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

export class PheromosaGX_140 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 170;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Fast Raid", cost: [], damage: "30", text: "If you go first, you can use this attack on your first turn." },
      { name: "Cruel Spike", cost: [], damage: "60", text: "Your opponent's Active Pokémon is now Confused." },
      { name: "Beauty-GX", cost: [], damage: "50×", text: "This attack does 50 damage for each Prize card your opponent has taken. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "UPR";
  public name: string = "Pheromosa-GX";
  public fullName: string = "Pheromosa-GX UPR 140";
  public text: string = "Pheromosa-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[2]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    return state;
  }
}
