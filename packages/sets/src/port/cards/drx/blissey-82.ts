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

export class Blissey_82 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Chansey";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Softboiled", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may flip a coin. If heads, heal 30 damage from your Active Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Double-Edge", cost: [], damage: "90", text: "This Pokémon does 60 damage to itself." }
  ];
  public set: string = "DRX";
  public name: string = "Blissey";
  public fullName: string = "Blissey DRX 82";
  public text: string = "Blissey";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 60);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.healSelfPower(this, store, state, effect).reduce(effect.power, 30);
    }
    return state;
  }
}
