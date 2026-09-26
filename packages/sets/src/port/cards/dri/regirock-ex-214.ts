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

export class RegirockEx_214 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 230;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Regi Charge", cost: [], damage: "", text: "Attach up to 2 Basic Fighting Energy cards from your discard pile to this Pokémon." },
      { name: "Giant Rock", cost: [], damage: "140+", text: "If your opponent's Active Pokémon is a Stage 2 Pokémon, this attack does 140 more damage." }
  ];
  public set: string = "DRI";
  public name: string = "Regirock ex";
  public fullName: string = "Regirock ex DRI 214";
  public text: string = "Regirock ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 140, 1);
    }
    return state;
  }
}
