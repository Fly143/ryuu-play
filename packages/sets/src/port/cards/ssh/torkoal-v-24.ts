import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
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

export class TorkoalV_24 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 210;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Combustion Pillar", cost: [], damage: "90+", text: "Discard the top card of your deck. If that card is a Fire Energy card, this attack does 90 more damage." },
      { name: "Steam Crush", cost: [], damage: "120", text: "Discard 2 Energy from your opponent's Active Pokémon." }
  ];
  public set: string = "SSH";
  public name: string = "Torkoal V";
  public fullName: string = "Torkoal V SSH 24";
  public text: string = "Torkoal V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 90, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergyDefending(this, store, state, effect).use(effect, 2);
    }
    return state;
  }
}
