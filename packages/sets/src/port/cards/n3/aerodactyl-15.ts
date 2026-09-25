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

export class Aerodactyl_152 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Mysterious Fossil";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Prehistoric Memory", powerType: PowerType.ABILITY, text: "Whenever an Evolved Pokémon attacks (even if it's your opponent's), it can use any attack from its Basic Pokémon card or any Evolution card attached to it. It still has to pay for that attack's Energy cost. This power stops working while Aerodactyl is Asleep, Confused, or Paralyzed.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Fly", cost: [], damage: "30", text: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Aerodactyl. If tails, this attack does nothing (not even damage)." }
  ];
  public set: string = "N3";
  public name: string = "Aerodactyl";
  public fullName: string = "Aerodactyl N3 15";
  public text: string = "Aerodactyl";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.preventDamageNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
