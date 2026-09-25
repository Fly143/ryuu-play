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

export class TeamAquaSMuk_8 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Team Aqua's Grimer";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sludge Festival", powerType: PowerType.ABILITY, text: "The Retreat Cost of each Pokémon in play (except for Team Aqua Pokémon) is Colorless more.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Pester", cost: [], damage: "60+", text: "If your opponent's Active Pokémon is affected by a Special Condition, this attack does 60 more damage." }
  ];
  public set: string = "DCR";
  public name: string = "Team Aqua's Muk";
  public fullName: string = "Team Aqua's Muk DCR 8";
  public text: string = "Team Aqua's Muk";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 60, 1);
    }
    return state;
  }
}
