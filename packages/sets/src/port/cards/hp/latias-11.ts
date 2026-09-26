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

export class Latias_11 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dual Aura", powerType: PowerType.ABILITY, text: "As long as you have Latios or Latios ex in play, each player's Evolved Pokémon (excluding Pokémon-ex) can't use any Poké-Bodies.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Spearhead", cost: [], damage: "", text: "Draw a card." },
      { name: "Dragon Claw", cost: [], damage: "40", text: "" }
  ];
  public set: string = "HP";
  public name: string = "Latias δ";
  public fullName: string = "Latias δ HP 11";
  public text: string = "Latias δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.drawCardsAttack(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
