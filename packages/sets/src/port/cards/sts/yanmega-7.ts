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

export class Yanmega_73 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Yanma";
  public hp: number = 110;
    public height?: number = 1.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sonic Vision", powerType: PowerType.ABILITY, text: "If you have exactly 4 cards in your hand, ignore all Energy in the attack cost of each of this Pokémon's attacks.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Assault Boom", cost: [], damage: "50+", text: "If your opponent's Active Pokémon has a Pokémon Tool card attached to it, this attack does 70 more damage." }
  ];
  public set: string = "STS";
  public name: string = "Yanmega";
  public fullName: string = "Yanmega STS 7";
  public text: string = "Yanmega";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 70, 1);
    }
    return state;
  }
}
