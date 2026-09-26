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

export class SandyShocksEx_250 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 220;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Magnetic Absorption", powerType: PowerType.ABILITY, text: "Once during your turn, if your opponent has 4 or fewer Prize cards remaining, you may attach a Basic Fighting Energy card from your discard pile to this Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Earthen Spike", cost: [], damage: "200", text: "During your next turn, this Pokémon can't attack." }
  ];
  public set: string = "PAR";
  public name: string = "Sandy Shocks ex";
  public fullName: string = "Sandy Shocks ex PAR 250";
  public text: string = "Sandy Shocks ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
