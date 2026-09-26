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

export class AlolanGolem_37 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Alolan Graveler";
  public hp: number = 180;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Electromagnetic Bomb", cost: [], damage: "20×", text: "Move any number of Lightning Energy from your Benched Pokémon to this Pokémon. This attack does 20 damage for each Energy card you moved in this way." },
      { name: "Super Zap Cannon", cost: [], damage: "190", text: "Discard 2 Energy from this Pokémon." }
  ];
  public set: string = "UNB";
  public name: string = "Alolan Golem";
  public fullName: string = "Alolan Golem UNB 37";
  public text: string = "Alolan Golem";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 2);
    }
    return state;
  }
}
