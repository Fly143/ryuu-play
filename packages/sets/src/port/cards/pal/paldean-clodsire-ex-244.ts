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

export class PaldeanClodsireEx_244 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Paldean Wooper";
  public hp: number = 280;
    public height?: number = 1.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Toxic Wetland", powerType: PowerType.ABILITY, text: "Once during your turn, if a Stadium is in play, you may make your opponent's Active Pokémon Poisoned.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Needle Bone", cost: [], damage: "200", text: "Flip a coin. If tails, during your next turn, this Pokémon can't attack." }
  ];
  public set: string = "PAL";
  public name: string = "Paldean Clodsire ex";
  public fullName: string = "Paldean Clodsire ex PAL 244";
  public text: string = "Paldean Clodsire ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
