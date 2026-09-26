import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
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

export class Magcargo_41 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Slugma";
  public hp: number = 80;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dual Armor", powerType: PowerType.ABILITY, text: "As long as Magcargo has any Fighting Energy attached to it, Magcargo is both Fire and Fighting type.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Smokescreen", cost: [], damage: "30", text: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing." },
      { name: "Extra Flame", cost: [], damage: "40+", text: "If the Defending Pokémon is Pokémon-ex, this attack does 40 damage plus 30 more damage." }
  ];
  public set: string = "UF";
  public name: string = "Magcargo";
  public fullName: string = "Magcargo UF 41";
  public text: string = "Magcargo";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantAttackOpponentNextTurn(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
