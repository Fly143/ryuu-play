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

export class TeamAquaSCacturne_1 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Team Aqua's Cacnea";
  public hp: number = 80;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Dark Bind", cost: [], damage: "10", text: "You may discard a Darkness Energy card attached to Team Aqua's Cacturne. If you do, the Defending Pokémon is now Paralyzed." },
      { name: "Poison Barb", cost: [], damage: "40", text: "The Defending Pokémon is now Poisoned." }
  ];
  public set: string = "MA";
  public name: string = "Team Aqua's Cacturne";
  public fullName: string = "Team Aqua's Cacturne MA 1";
  public text: string = "Team Aqua's Cacturne";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.PARALYZED);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    return state;
  }
}
