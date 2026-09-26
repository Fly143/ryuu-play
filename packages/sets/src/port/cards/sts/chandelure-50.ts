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

export class Chandelure_50 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Lampent";
  public hp: number = 130;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sinister Selection", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may look at the top 2 cards of your deck and put 1 of them into your hand. Discard the other card.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Past Friends", cost: [], damage: "10+", text: "This attack does 10 more damage for each Supporter card in your discard pile." }
  ];
  public set: string = "STS";
  public name: string = "Chandelure";
  public fullName: string = "Chandelure STS 50";
  public text: string = "Chandelure";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 10, 0);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "pokedex");
    }
    return state;
  }
}
