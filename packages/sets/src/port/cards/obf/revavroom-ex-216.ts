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

export class RevavroomEx_216 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Varoom";
  public hp: number = 280;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Tune-Up", powerType: PowerType.ABILITY, text: "This Pokémon may have up to 4 Pokémon Tools attached to it. If it loses this Ability, discard Pokémon Tools from it until only 1 remains.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Wild Drift", cost: [], damage: "170", text: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance)." }
  ];
  public set: string = "OBF";
  public name: string = "Revavroom ex";
  public fullName: string = "Revavroom ex OBF 216";
  public text: string = "Revavroom ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.reduceDamageNextTurn(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
