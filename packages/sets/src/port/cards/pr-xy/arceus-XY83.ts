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

export class ArceusXY83 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
    public height?: number = 3.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Gather Light", cost: [], damage: "", text: "Move as many Energy as you like from your Benched Pokémon to this Pokémon." },
      { name: "Judgment Blast", cost: [], damage: "10+", text: "This attack does 30 more damage for each different type of basic Energy attached to this Pokémon." }
  ];
  public set: string = "PR-XY";
  public name: string = "Arceus";
  public fullName: string = "Arceus PR-XY XY83";
  public text: string = "Arceus";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
