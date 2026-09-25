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

export class TeamAquaSWalrein_6 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Team Aqua's Sealeo";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Power Blow", cost: [], damage: "10+", text: "Does 10 damage plus 10 more damage for each Energy attached to Team Aqua's Walrein." },
      { name: "Hydro Reverse", cost: [], damage: "50+", text: "You may return any number of basic Water Energy cards attached to all of your Pokémon to your hand. If you do, this attack does 50 damage plus 10 more damage for each Energy you returned." }
  ];
  public set: string = "MA";
  public name: string = "Team Aqua's Walrein";
  public fullName: string = "Team Aqua's Walrein MA 6";
  public text: string = "Team Aqua's Walrein";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.scoopUpSelf(this, store, state, effect).use(effect);
    }
    return state;
  }
}
