import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
  BetweenTurnsEffect,
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

export class Feraligatr_4 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Croconaw";
  public hp: number = 120;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Intimidating Fang", powerType: PowerType.ABILITY, text: "As long as Feraligatr is your Active Pokémon, any damage done by an opponent's attack is reduced by 10 (before applying Weakness and Resistance).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Pull Away", cost: [], damage: "30", text: "If your opponent has 5 of more cards in his or her hand, your opponent discards a number of cards until your opponent has 4 cards left in his or her hand." },
      { name: "Tonnage", cost: [], damage: "50+", text: "You may do 50 damage plus 30 more damage. If you do, Feraligatr does 30 damage to itself." }
  ];
  public set: string = "UF";
  public name: string = "Feraligatr";
  public fullName: string = "Feraligatr UF 4";
  public text: string = "Feraligatr";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.reduceDamageSelfPower(this, store, state, effect).reduce(effect.power, 10);
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "reduceDamageSelf:10");
    }
    return state;
  }
}
