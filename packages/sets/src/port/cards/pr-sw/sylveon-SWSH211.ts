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

export class SylveonSWSH211 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Eevee";
  public hp: number = 110;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Time Out Kick", cost: [], damage: "30", text: "You may put an Energy attached to your opponent's Active Pokémon into their hand." },
      { name: "Symphony Whip", cost: [], damage: "70+", text: "If you played a Supporter card from your hand during this turn, this attack does 70 more damage." }
  ];
  public set: string = "PR-SW";
  public name: string = "Sylveon";
  public fullName: string = "Sylveon PR-SW SWSH211";
  public text: string = "Sylveon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 70, 1);
    }
    return state;
  }
}
