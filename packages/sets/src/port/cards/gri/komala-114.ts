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

export class Komala_114 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Comatose", powerType: PowerType.ABILITY, text: "As long as this Pokémon is your Active Pokémon, whenever you attach an Energy from your hand to it, it is now Asleep.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hypno Roll", cost: [], damage: "100", text: "This attack can be used if this Pokémon is Asleep. If it is not Asleep, this attack does nothing." }
  ];
  public set: string = "GRI";
  public name: string = "Komala";
  public fullName: string = "Komala GRI 114";
  public text: string = "Komala";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "attackGate");
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
