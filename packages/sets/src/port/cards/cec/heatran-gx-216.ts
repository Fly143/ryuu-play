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

export class HeatranGX_216 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 190;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Burning Road", powerType: PowerType.ABILITY, text: "Once during your turn, when this Pokémon moves from your Bench to become your Active Pokémon, you may move any number of Fire Energy from your other Pokémon to it.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Steaming Stomp", cost: [], damage: "130", text: "" },
      { name: "Hot Burn-GX", cost: [], damage: "50×", text: "This attack does 50 damage times the amount of Fire Energy attached to this Pokémon. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "CEC";
  public name: string = "Heatran-GX";
  public fullName: string = "Heatran-GX CEC 216";
  public text: string = "Heatran-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    return state;
  }
}
