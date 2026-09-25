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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TeamAquaSSealeo_16 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Team Aqua's Spheal";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Aqua Trance", cost: [], damage: "20", text: "At the end of your opponent's next turn, the Defending Pokémon is now Asleep." },
      { name: "Super Hypnoblast", cost: [], damage: "30+", text: "If the Defending Pokémon is Asleep, this attack does 30 damage plus 20 more damage." }
  ];
  public set: string = "MA";
  public name: string = "Team Aqua's Sealeo";
  public fullName: string = "Team Aqua's Sealeo MA 16";
  public text: string = "Team Aqua's Sealeo";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    return state;
  }
}
