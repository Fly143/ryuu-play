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

export class TeamRocketSZapdos_70 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Jamming Wing", cost: [], damage: "30", text: "You may move an Energy from your opponent's Active Pokémon to 1 of their Benched Pokémon." },
      { name: "Wicked Thunder", cost: [], damage: "60+", text: "If this Pokémon has any Team Rocket's Energy attached, this attack does 60 more damage." }
  ];
  public set: string = "DRI";
  public name: string = "Team Rocket's Zapdos";
  public fullName: string = "Team Rocket's Zapdos DRI 70";
  public text: string = "Team Rocket's Zapdos";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 60, 1);
    }
    return state;
  }
}
