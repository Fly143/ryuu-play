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

export class Jumpluff_3 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Skiploom";
  public hp: number = 90;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Leave It to the Wind", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may return this Pokémon and all cards attached to it to your hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Acrobatics", cost: [], damage: "20+", text: "Flip 2 coins. This attack does 30 more damage for each heads." }
  ];
  public set: string = "BCR";
  public name: string = "Jumpluff";
  public fullName: string = "Jumpluff BCR 3";
  public text: string = "Jumpluff";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 30, 0);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.scoopUpSelf(this, store, state, effect).use(effect as any);
    }
    return state;
  }
}
