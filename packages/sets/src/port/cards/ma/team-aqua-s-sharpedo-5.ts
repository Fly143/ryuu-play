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

export class TeamAquaSSharpedo_5 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Team Aqua's Carvanha";
  public hp: number = 70;
    public height?: number = 1.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rage", cost: [], damage: "10+", text: "Does 10 damage plus 10 more damage for each damage counter on Team Aqua's Sharpedo." },
      { name: "Aqua Slash", cost: [], damage: "60", text: "Team Aqua's Sharpedo can't attack during your next turn." }
  ];
  public set: string = "MA";
  public name: string = "Team Aqua's Sharpedo";
  public fullName: string = "Team Aqua's Sharpedo MA 5";
  public text: string = "Team Aqua's Sharpedo";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 10, 0);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
