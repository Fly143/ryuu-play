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

export class UltraNecrozma_164 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
    public height?: number = 2.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Ultra Burst", powerType: PowerType.ABILITY, text: "This Pokémon can't attack unless your opponent has 2 or fewer Prize cards remaining.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Luster of Downfall", cost: [], damage: "170", text: "Discard an Energy from your opponent's Active Pokémon." }
  ];
  public set: string = "CEC";
  public name: string = "Ultra Necrozma";
  public fullName: string = "Ultra Necrozma CEC 164";
  public text: string = "Ultra Necrozma";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergyDefending(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
