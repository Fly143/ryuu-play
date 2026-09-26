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

export class ArmaldoEx_84 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Anorith";
  public hp: number = 160;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dual Armor", powerType: PowerType.ABILITY, text: "As long as Armaldo ex has any React Energy cards attached to it, Armaldo ex is both Grass and Fighting type.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Spiral Drain", cost: [], damage: "40", text: "Remove 2 damage counters from Armaldo ex." },
      { name: "Vortex Chop", cost: [], damage: "70", text: "If the Defending Pokémon has any Resistance, this attack's base damage is 100 instead of 70." }
  ];
  public set: string = "LM";
  public name: string = "Armaldo ex";
  public fullName: string = "Armaldo ex LM 84";
  public text: string = "Armaldo ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
