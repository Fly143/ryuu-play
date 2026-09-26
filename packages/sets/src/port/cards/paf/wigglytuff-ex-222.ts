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

export class WigglytuffEx_222 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Jigglypuff";
  public hp: number = 250;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Expanding Body", powerType: PowerType.ABILITY, text: "If this Pokémon has any Special Energy attached, it gets +100 HP.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Friend Tackle", cost: [], damage: "90+", text: "If you played a Supporter card from your hand during this turn, this attack does 90 more damage." }
  ];
  public set: string = "PAF";
  public name: string = "Wigglytuff ex";
  public fullName: string = "Wigglytuff ex PAF 222";
  public text: string = "Wigglytuff ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 90, 1);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
