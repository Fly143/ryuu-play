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

export class Octillery_10 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Remoraid";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Super Suction Cups", powerType: PowerType.ABILITY, text: "As long as Octillery is your Active Pokémon, your opponent's Pokémon can't retreat.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Standing By", cost: [], damage: "", text: "Discard an Energy card attached to Octillery. During your next turn, Octillery's Pulse Blast attack's base damage is 120." },
      { name: "Pulse Blast", cost: [], damage: "30", text: "" }
  ];
  public set: string = "UF";
  public name: string = "Octillery";
  public fullName: string = "Octillery UF 10";
  public text: string = "Octillery";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 0, 0);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
