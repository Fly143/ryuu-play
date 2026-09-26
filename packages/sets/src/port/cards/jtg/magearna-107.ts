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

export class Magearna_107 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Auto Heal", powerType: PowerType.ABILITY, text: "As long as this Pokémon is in the Active Spot, whenever you attach an Energy card from your hand to 1 of your Pokémon, heal 90 damage from that Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Spike Draw", cost: [], damage: "20", text: "Draw 2 cards." }
  ];
  public set: string = "JTG";
  public name: string = "Magearna";
  public fullName: string = "Magearna JTG 107";
  public text: string = "Magearna";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.drawCardsAttack(this, store, state, effect).use(effect, 2);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
