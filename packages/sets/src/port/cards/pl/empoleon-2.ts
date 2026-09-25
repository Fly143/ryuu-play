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

export class Empoleon_2 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Prinplup";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Emperor Aura", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), when you play Empoleon from your hand to evolve 1 of your Active Pokémon, you may use this power. Your opponent can't attach any Energy cards from his or her hand to his or her Pokémon during your opponent's next turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Steel Wing", cost: [], damage: "40", text: "During your opponent's next turn, any damage done to Empoleon by attacks is reduced by 20 (after applying Weakness and Resistance)." },
      { name: "Whirlpool", cost: [], damage: "60", text: "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon." }
  ];
  public set: string = "PL";
  public name: string = "Empoleon";
  public fullName: string = "Empoleon PL 2";
  public text: string = "Empoleon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.selfReduceDamageNextTurn(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergyDefending(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
