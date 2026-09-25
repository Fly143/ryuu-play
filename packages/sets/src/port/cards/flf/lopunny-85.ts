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

export class Lopunny_85 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Buneary";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Big Jump", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may return this Pokémon and all cards attached to it to your hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Sitdown Bounce", cost: [], damage: "80", text: "Flip a coin. If tails, this Pokémon can't attack during your next turn." }
  ];
  public set: string = "FLF";
  public name: string = "Lopunny";
  public fullName: string = "Lopunny FLF 85";
  public text: string = "Lopunny";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.scoopUpSelf(this, store, state, effect).use(effect as any);
    }
    return state;
  }
}
