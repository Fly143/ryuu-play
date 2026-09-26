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

export class MegaDarkraiEx_116 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 280;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Dusk Raid", cost: [], damage: "110+", text: "If your Benched Pokémon have any damage counters on them, this attack does 110 more damage." },
      { name: "Abyss Eye", cost: [], damage: "", text: "If your opponent's Active Pokémon is affected by a Special Condition, it is Knocked Out." }
  ];
  public set: string = "PBL";
  public name: string = "Mega Darkrai ex";
  public fullName: string = "Mega Darkrai ex PBL 116";
  public text: string = "Mega Darkrai ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 110, 1);
    }
    return state;
  }
}
