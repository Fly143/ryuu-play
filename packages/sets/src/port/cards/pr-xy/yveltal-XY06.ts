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

export class YveltalXY06 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
    public height?: number = 5.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Oblivion Wing", cost: [], damage: "30", text: "Attach a Darkness Energy card from your discard pile to 1 of your Benched Pokémon." },
      { name: "Darkness Blade", cost: [], damage: "100", text: "Flip a coin. If tails, this Pokémon can't attack during your next turn." }
  ];
  public set: string = "PR-XY";
  public name: string = "Yveltal";
  public fullName: string = "Yveltal PR-XY XY06";
  public text: string = "Yveltal";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
