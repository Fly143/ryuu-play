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

export class RocketSMoltres_12 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Rebirth", powerType: PowerType.ABILITY, text: "When Rocket's Moltres is Knocked Out, you may return it to your hand after discarding it. This power can't be used if Rocket's Moltres is Asleep, Confused, or Paralyzed when it is Knocked Out.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Fire Wall", cost: [], damage: "40", text: "If an attack does damage to Rocket's Moltres during your opponent's next turn (even if Rocket's Moltres is Knocked Out), Rocket's Moltres attacks your opponent's Active Pokémon for 10 damage. (Apply Weakness and Resistance.)" }
  ];
  public set: string = "G1";
  public name: string = "Rocket's Moltres";
  public fullName: string = "Rocket's Moltres G1 12";
  public text: string = "Rocket's Moltres";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "koRevengePerEnergy");
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
