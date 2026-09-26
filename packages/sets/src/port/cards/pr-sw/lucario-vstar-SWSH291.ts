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

export class LucarioVSTARSWSH291 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Lucario V";
  public hp: number = 270;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Fighting Knuckle", cost: [], damage: "120+", text: "If your opponent's Active Pokémon is a Pokémon V, this attack does 120 more damage." },
      { name: "Aura Star", cost: [], damage: "70×", text: "This attack does 70 damage for each Energy attached to all of your opponent's Pokémon. (You can't use more than 1 VSTAR Power in a game.)" }
  ];
  public set: string = "PR-SW";
  public name: string = "Lucario VSTAR";
  public fullName: string = "Lucario VSTAR PR-SW SWSH291";
  public text: string = "Lucario VSTAR";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 120, 1);
    }
    return state;
  }
}
